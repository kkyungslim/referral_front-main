import ENV_SERVER from './server/ENV_SERVER';

export const COOKIES = {
  user_token: '31e4bf',
};

// 다음과 같은 형태임  : https://serverurl.com  <- 끝에 슬래시 없음
export const DEFAULT_SERVER_URL = ENV_SERVER.SERVER_URL + ENV_SERVER.API_PREFIX;

export const TEMP_TEST_URL = ENV_SERVER.SERVER_URL + '/api/test'

export const IS_DEV = ENV_SERVER.IS_DEV;

export const onDev = (onDev?: Function, onProd?: Function) => {
  if (IS_DEV) {
    return onDev?.();
  } else {
    return onProd?.();
  }
};

export const UNDEFINED = '__UNDEFINED__';
