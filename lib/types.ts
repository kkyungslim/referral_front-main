/* eslint-disable @typescript-eslint/no-empty-object-type */
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ServerBanner } from '@/lib/API';

export const MARKETS = [
  'BITGET',
  'BINGX',
  'OKX',
  'HTX',
  'BYBIT',
  'GATEIO',
] as const;

export type MarketName = (typeof MARKETS)[number];

export type DateTime = string;

export type Res<T> = {
  success: 'success' | 'fail' | 'error';
  data: T | null;
  errors: ResponseError[] | null;
};

export type UserUIDResponse = {
  uid: string;
  marketName: MarketName;
  reward: number;
  regDatetime: DateTime;
};

export type Market = {
  name: string;
  tag: string;
  paybackRate: number;
  discountRate: number;
};

/**
 * GET /b-api/v1/api/user/market_info
 * {
 *     "success": "success",
 *     "data": [
 *         {
 *             "uid": "10000000",
 *             "marketName": "BITGET",
 *             "regDatetime": "2025-04-20T20:22:50"
 *         }
 *     ],
 *     "errors": []
 * }
 * **/
export type UserUIDResponseRes = Res<UserUIDResponse[]>;

/**
 * GET /b-api/v1/api/market
 * {
 *     "success": "success",
 *     "data": [
 *         {
 *             "name": "BingX",
 *             "tag": "추천 거래소",
 *             "paybackRate": 60,
 *             "discountRate": 0
 *         },
 *         {
 *             "name": "HTX",
 *             "tag": "인기 거래소",
 *             "paybackRate": 54,
 *             "discountRate": 0
 *         },
 *         {
 *             "name": "Bitget",
 *             "tag": "100% 환급",
 *             "paybackRate": 60,
 *             "discountRate": 50
 *         },
 *         {
 *             "name": "Bybit",
 *             "tag": "최상위 거래소",
 *             "paybackRate": 45,
 *             "discountRate": 20
 *         },
 *         {
 *             "name": "OKX",
 *             "tag": "최상위 거래량",
 *             "paybackRate": 54,
 *             "discountRate": 0
 *         }
 *     ],
 *     "errors": []
 * }
 * **/
export type MarketRes = Res<Market[]>;

/**
 * POST /b-api/v1/api/market/uid
 * ERROR Codes (발생 시 해당 에러 메세지 같이 던져줍니다.)
 *  - UID001 -> "UID 검색에 실패했습니다. 잠시 후 다시 시도해주세요. code : {code}"
 *      => 코드 있을 수도 있고 없을 수도 있음. 웬만하면 있음.
 *         없으면 marketName이 올바르지 않을 확률이 높습니다.
 *         그런게 아니라면 말해주세요. 로그 트래킹 해야함
 *  - UID409 -> "이미 등록된 UID 입니다."
 *  - Market400 -> "아직 지원하지 않는 거래소입니다."
 *  - Market409 -> "하나의 거래소에 대해선 하나의 UID만 등록할 수 있습니다."
 * # request
 * {
 *     marketName: "BITGET",
 *     uid: "10000000"
 * }
 *
 * # response
 * {
 *     "success": "success",
 *     "data": null,
 *     "errors": []
 * }
 *
 * 현재 거래소 별 테스트 가능한 UID 받아놓은 목록 (아래 거래소만 API KEY 연동되어있음)
 * - BingX : 10904597
 * - ByBit : 12598436
 * - HTX : 534783927
 * **/
export type UIDSearchRequest = {
  marketName: MarketName;
  uid: string;
};

export type TDate = string; //

export type TEvent = {
  name: string;
  type: TEventType; // 우선 임시로 뒀습니다. 아마 항상 empty String 일듯
  marketName: string;
  description: string;
  startDate: TDate;
  endDate: TDate;
  targetUrl: string;
  imageUrl: string | StaticImport;
};

export type TEventType = 'POPULAR' | 'RECOMMEND';

/**
 * GET /b-api/v1/api/event
 * => Show Active Event List
 *
 * {
 *     "success": "success",
 *     "data": [
 *         {
 *             "name": "Event 1",
 *             "type": "",
 *             "startDate": "2025-05-06",
 *             "endDate": "2025-06-06",
 *             "imageUrl": "https://thetherbase.s3.ap-northeast-2.amazonaws.com/event/sample_image.jpg",
 *             "targetUrl": "https://www.naver.com"
 *         },
 *         {
 *             "name": "Event 2",
 *             "type": "",
 *             "startDate": "2025-05-06",
 *             "endDate": "2025-06-06",
 *             "imageUrl": null,
 *             "targetUrl": "https://www.naver.com"
 *         },
 *         {
 *             "name": "Event 3",
 *             "type": "",
 *             "startDate": "2025-05-01",
 *             "endDate": "2025-06-07",
 *             "imageUrl": "https://thetherbase.s3.ap-northeast-2.amazonaws.com/event/sample_image.jpg",
 *             "targetUrl": "https://www.naver.com"
 *         }
 *     ],
 *     "errors": []
 * }
 * **/
export type EventListResponse = TEvent[];

export type UIDSearch = {};

export type UIDSearchRes = Res<UIDSearch>;

export type PartnerData = {
  value: MarketName;
  name: string;
  amount: string;
  icon: React.ReactNode;
  id: string;
};

export type User = {
  uid: string;
  name: string;
  email: string;
  regDatetime: string;
  updatedDatetime: string;
  lastLoginDatetime: string;
};

export type DefaultProps = {
  user?: User;
  uid?: UserUIDResponse[];
  userMarketInfo?: UserUIDResponse[];
  eventList?: EventListResponse;
  bannerList?: ServerBanner[];
};

export type ResponseError = {
  message: string;
  code: string;
};

export type NavItem = {
  name: string;
  href: string;
};

export type MobileNavItem = NavItem & {
  icon: React.ReactNode;
};

export type PaybackExchangeData = {
  exchangeName: string;
  description: string;
  score: number;
  cashbackRate: string;
  discountRate: string;
  avgRefund: string;
  limitPrice: number;
  marketPrice: number;
  icon: React.ReactNode;
  mobilePaybackRate: string;
};

export type Tab = {
  value: string;
  title: string;
};

export type EventData = {
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  hashtags?: string[];
  exChangeName?: string;
};

// 가입
export type ReqRegisterUser = {
  email: string;
  password: string;
};

export type ResRegisterUser = {
  valid: boolean;
};

// 가입 + email인증
export type ReqRegisterUserValidation = {
  email: string;
  password: string;
  code: string;
};

export type ResRegisterUserValidation = {
  valid: boolean;
};

export type ReqUserLogin = {
  email: string;
  password: string;
};
export type ResUserLogin = {
  valid: boolean;
};

export type CaptchaRes = {
  captcha_id: string;
  lot_number: string;
  pass_token: string;
  gen_time: string;
  captcha_output: string;
};

export type ReqUserLoginValidation = {
  email: string;
  password: string;
  code: string;
  captcha: CaptchaRes;
};

export type ResUserLoginValidation = {
  result: string; // token
};

// export type ReqUserInfo = {};
export type ResUserInfo = {
  user: User;
};

export type UidSearchParam = {
  partner: MarketName;
  uid: string;
};
