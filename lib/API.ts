/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { cookies } from 'next/headers';
import { COOKIES, DEFAULT_SERVER_URL, IS_DEV, onDev } from './Constants';
import {
  CaptchaRes,
  EventListResponse,
  Market,
  ReqUserLogin,
  ReqUserLoginValidation,
  Res,
  ResRegisterUserValidation,
  ResUserInfo,
  ResUserLogin,
  ResUserLoginValidation,
  UIDSearch,
  UIDSearchRequest,
  UIDSearchRes,
  User,
  UserUIDResponse,
  UserUIDResponseRes,
} from './types';
import {
  setCookie as _setCookie,
  getCookie as _getCookie,
  deleteCookie as _deleteCookie,
} from 'cookies-next';
import { validateObject } from './utils';

async function setCookie(...params: Parameters<typeof _setCookie>) {
  if (!params[2]) {
    params[2] = {};
  }

  params[2] = {
    cookies,
    ...params[2],
  };

  return _setCookie(...params);
}

async function deleteCookie(...params: Parameters<typeof _deleteCookie>) {
  if (!params[1]) {
    params[1] = {};
  }

  params[1] = {
    cookies,
    ...params[1],
  };

  return _deleteCookie(...params);
}

async function getCookie(...params: Parameters<typeof _getCookie>) {
  if (!params[1]) {
    params[1] = {};
  }

  params[1] = {
    cookies,
    ...params[1],
  };

  return _getCookie(...params);
}

/**
 *
 * @returns fetch는 토큰과 DEFAULT_SERVER_URL이 포함된 fetch
 */
async function userMiddleware() {
  console.log('middleWare ?');
  const token = await getCookie(COOKIES.user_token);

  if (!token) {
    return { fetch: undefined };
  }

  // 기존 fetch를 대신할 함수ㄹ
  const _fetch = async function <T = any>(
    ...params: Parameters<typeof fetch>
  ): Promise<T> {
    if (
      typeof params[0] === 'string' &&
      !params[0].startsWith(DEFAULT_SERVER_URL)
    ) {
      params[0] = DEFAULT_SERVER_URL + params[0];
    }

    if (!params[1]) {
      params[1] = {};
    }

    if (!params[1].headers) {
      params[1].headers = {};
    }

    params[1].headers = {
      USER_AUTH_TOKEN: `bearer ${token}`,
      ...params[1].headers,
    };

    return fetch(...params).then((res) => res.json());
  };

  return { token, fetch: _fetch };
}

export async function APIlogout() {
  return deleteCookie(COOKIES.user_token);
}

export async function APIlogin(params: ReqUserLogin): Promise<boolean> {
  const { email, password } = params;
  if (!validateObject(params)) {
    return false;
  }

  console.log({ DEFAULT_SERVER_URL });
  return fetch(DEFAULT_SERVER_URL + '/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
    cache: 'no-store',
  })
    .then((res) => res.json())
    .then((res: Res<ResUserLogin>) => {
      if (res?.success === 'success' && res?.data?.valid) {
        return res.data.valid;
      }
      console.error({ params, res });
      return false;
    });
}

export async function APIloginCode(
  params: ReqUserLoginValidation,
): Promise<User | undefined> {
  const { email, password, code, captcha } = params;
  if (!validateObject(params)) {
    return undefined;
  }

  const url = DEFAULT_SERVER_URL + '/api/user/login_code';

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      code,
      captcha,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
    .then((res) => res.json())
    .then(async (res: Res<ResUserLoginValidation>) => {
      const token = res.data?.result;
      if (typeof token === 'string' && token.length > 0) {
        if (IS_DEV) {
          await setCookie(COOKIES.user_token, token, {
            httpOnly: false,
            secure: false,
          });
        } else {
          await setCookie(COOKIES.user_token, token, {
            httpOnly: true,
            secure: true,
          });
        }

        return APIuserInfo();
      }
      return undefined;
    });
}

export async function APIregister(params: ReqUserLogin): Promise<boolean> {
  const { email, password } = params;
  if (!validateObject(params)) {
    return false;
  }

  return fetch(DEFAULT_SERVER_URL + '/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res: Res<ResUserLogin>) => {
      const errors = res?.errors;
      if (Array.isArray(errors) && errors.length > 0) {
        const message = errors[0].message.replace(
          'Error: 회원 가입 오류 : ',
          '',
        );
        console.log('Server message', message);
        throw message;
      }

      return res?.data?.valid ?? false;
    });
}

export async function APIregisterCode(
  params: ReqUserLoginValidation,
): Promise<boolean> {
  const { email, password, code, captcha } = params;
  if (!validateObject(params)) {
    return false;
  }

  return fetch(DEFAULT_SERVER_URL + '/api/user/register_code', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      code,
      captcha,
    }),
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res: Res<ResRegisterUserValidation>) => {
      return res?.data?.valid ?? false;
    });
}

export async function APIuserInfo(): Promise<User | undefined> {
  const { fetch } = await userMiddleware();
  if (!fetch) {
    return Promise.resolve(undefined);
  }

  return fetch(
    '/api/user/info',
    // , {cache: 'no-store',} // 일단 캐시하도록
    {
      next: {
        revalidate: 300, // 5분간 캐시
      },
    },
  ).then((res: Res<ResUserInfo>) => {
    if (res?.success === 'success' && res?.data?.user) {
      return res.data.user;
    }
    console.error('APIuserInfo res:', res);
    return undefined;
  });
}

export async function APIuserMarketInfo(): Promise<
  UserUIDResponse[] | undefined
> {
  const { fetch } = await userMiddleware();

  return fetch<UserUIDResponseRes>?.('/api/user/market_info').then((res) => {
    if (res?.success === 'success' && Boolean(res?.data)) {
      return res.data!;
    }
    return undefined;
  });
}

export async function APImarketList(): Promise<Market[] | undefined> {
  return fetch(DEFAULT_SERVER_URL + '/api/market', {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .then((res: Res<Market[]>) => {
      if (res?.success === 'success' && Boolean(res?.data)) {
        return res.data!;
      }
      console.error('APImarketList res:', res);
      return undefined;
    });
}

const verifyUidSearchparams = (params: UIDSearchRequest) => {
  if (!validateObject(params)) {
    return false;
  }

  return true;
};

export async function APIUidSearch(
  params: UIDSearchRequest,
): Promise<UIDSearch | undefined> {
  if (!verifyUidSearchparams(params)) {
    return;
  }

  const token = await getCookie(COOKIES.user_token);

  if (token) {
    const { fetch: _fetch } = await userMiddleware();

    return _fetch<UIDSearchRes>?.('/api/market/uid_search', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res);
      return res;
    });
  } else {
    return fetch(DEFAULT_SERVER_URL + '/api/market/uid_search', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res: Res<UIDSearch>) => {
        return res;
      });
  }
}

export async function APIUidRegister(
  params: UIDSearchRequest,
): Promise<UIDSearch | undefined> {
  if (!verifyUidSearchparams(params)) {
    return;
  }

  const { fetch } = await userMiddleware();

  return fetch<UIDSearchRes>?.('/api/market/uid_register', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res;
    // if (res?.success === 'success' && Boolean(res?.data)) {
    //   return res.data!;
    // }

    // console.error('APIUidSearch res:', res);

    return undefined;
  });
}

export async function APIEventList(): Promise<EventListResponse | undefined> {
  return fetch(DEFAULT_SERVER_URL + '/api/event', {
    cache: 'no-store',
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .then((res: Res<EventListResponse>) => {
      if (res?.success === 'success' && Boolean(res?.data)) {
        return res.data!;
      }

      console.error('APIEventList res:', res);

      return undefined;
    });
}

export async function APIverifyCaptcha(captcha: CaptchaRes) {
  return fetch(DEFAULT_SERVER_URL + '/api/utils/captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(captcha),
  })
    .then((res) => res.json())
    .then((res: any) => res?.success === 'success');
}

export async function APIPaybackInfo(
  marketName: string,
): Promise<UserPaybackInfo | undefined> {
  const { fetch } = await userMiddleware();
  if (!fetch) {
    return Promise.resolve(undefined);
  }

  return fetch(
    `/api/user/payback_info?mk=${marketName}`,
    // , {cache: 'no-store',} // 일단 캐시하도록
    {
      next: {
        revalidate: 300, // 5분간 캐시
      },
    },
  ).then((res: Res<UserPaybackInfo>) => {
    if (res?.success === 'success' && res?.data) {
      return res.data;
    }
    console.error('APIuserInfo res:', res);
    return undefined;
  });
}

export async function APIGetPaybackDetail(
  marketName: string,
  year: string,
  month: string,
): Promise<UserCalenderData | undefined> {
  const { fetch } = await userMiddleware();
  if (!fetch) {
    return Promise.resolve(undefined);
  }

  return fetch(
    `/api/user/payback_history?y=${year}&m=${month}&mk=${marketName}`,
    // , {cache: 'no-store',} // 일단 캐시하도록
    // {
    //   next: {
    //     revalidate: 300, // 5분간 캐시
    //   },
    // },
  ).then((res: Res<UserCalenderData>) => {
    if (res?.success === 'success' && res?.data) {
      return res.data;
    }
    console.error('APIuserInfo res:', res);
    return undefined;
  });
}

export async function APIPrepareResetPassword(
  email: string,
): Promise<Res<boolean> | undefined> {
  return fetch(DEFAULT_SERVER_URL + '/api/user/reset_pw/prepare', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res: Res<boolean>) => {
      if (res.success === 'success' && res.data) {
        return res;
      } else {
        return undefined;
      }
    });
}

export async function APIValidateResetPassword(
  email: string,
  code: string,
  captcha: CaptchaRes,
): Promise<Res<boolean> | undefined> {
  const object = {
    email,
    code,
    captcha,
  }
  console.log('before send : ', object);
  return fetch(DEFAULT_SERVER_URL + '/api/user/reset_pw/validate', {
    method: 'POST',
    body: JSON.stringify({ email, code, captcha }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res: Res<boolean>) => {
      console.log(res);
      if (res.success === 'success' && res.data) {
        return res;
      } else {
        return undefined;
      }
    });
}

export async function APIResetPassword(
  email: string,
  password: string,
  passToken: string,
): Promise<Res<boolean> | undefined> {
  return fetch(DEFAULT_SERVER_URL + '/api/user/reset_pw', {
    method: 'POST',
    body: JSON.stringify({ email, password, passToken }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res: Res<boolean>) => {
      if (res.success === 'success') {
        return res;
      } else {
        return undefined;
      }
    });
}

export async function APIWithdraw(
  marketName: string,
  reward: number,
): Promise<boolean | undefined> {
  const { fetch } = await userMiddleware();
  if (!fetch) {
    return Promise.resolve(undefined);
  }

  return fetch(
    `/api/user/withdraw`,
    {
      method: 'POST',
      body: JSON.stringify({ marketName, reward }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    // , {cache: 'no-store',} // 일단 캐시하도록
    // {
    //   next: {
    //     revalidate: 300, // 5분간 캐시
    //   },
    // },
  ).then((res: Res<boolean>) => {
    if (res?.success === 'success' && res?.data) {
      return res.data;
    }
    console.error('APIWithdraw res:', res);
    return undefined;
  });
}

export async function APIResetPasswordOnLogin({originalPassword, newPassword}: {originalPassword: string, newPassword: string}): Promise<Res<boolean> | undefined> {
  const { fetch } = await userMiddleware();
  if (!fetch) {
    return Promise.resolve(undefined);
  }
  
  return fetch(
    `/api/user/reset_pw_logined`,
    {
      method: 'POST',
      body: JSON.stringify({ originalPassword, newPassword }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res: Res<boolean>) => {
    if (res?.success === 'success' && res?.data !== undefined) {
      return res;
    } else if (res.success === 'fail') {
      return res;
    }
    console.error('resetPasswordOnLogin res:', res);
    return undefined;
  });
}

export async function APIDeactivateAccount(): Promise<Res<boolean> | undefined> {
  const { fetch } = await userMiddleware();
  if (!fetch) {
    return Promise.resolve(undefined);
  }
  
  return fetch(
    `/api/user/deactivate`,
    {
      method: 'POST',
    }
  ).then((res: Res<boolean>) => {
    return res;
  })
}

export type ServerBanner = {
  no: number;
  title: string;
  subTitle: string;
  titleColor: string;
  subTitleColor: string;
  targetUrl: string | null;
  type: BannerType;
  pcImage: string;
  moImage: string;
  order: number;
  regDatetime: string;
  updatedDatetime: string;
  titleFontSizePC?: number;
  subTitleFontSizePC?: number;
  titleFontSizeMO?: number;
  subTitleFontSizeMO?: number;
};

export type BannerType = 'ASSOCIATED' | 'EVENT';

export async function APIGetBanner(
  type: BannerType,
): Promise<ServerBanner[] | undefined> {
  return fetch(DEFAULT_SERVER_URL + `/api/banner/${type.toLowerCase()}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res: Res<ServerBanner[]>) => {
      if (res.success === 'success' && res.data) {
        return res.data;
      } else {
        return undefined;
      }
    });
}

export type UserPaybackInfo = {
  totalPayback: number;
  summary: {
    monthly: number;
    weekly: number;
    daily: number;
    monthlyBefore: number;
  };
};

export type UserCalenderData = {
  withdrawRequests: WithdrawRequest[];
  commissionHistories: CommissionHistory[];
};

export type WithdrawRequest = {
  uid: string;
  marketName: string;
  amount: number;
  status: WITHDRAW_STATUS;
  regDatetime: string;
  updatedDatetime: string;
};

type WITHDRAW_STATUS =
  | 'PENDING'
  | 'CONFIRMED'
  | 'REJECTED'
  | 'CANCELED'
  | string;

export type CommissionHistory = {
  no?: number;
  marketName: string;
  commission: number;
  reward: number;
  regDatetime: string;
};
