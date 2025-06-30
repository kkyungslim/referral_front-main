export type BingXResponse<T> = {
  code: number;
  timestamp: number;
  message: string;
  data: T;
}

export type BingXListResponse<T> = {
  list: T[];
  total: number;
  currentAgentUid: number;
}

export type BingXDailyCommission = {
  uid: number; // Invited User UID
  commissionTime: number; // Commission timestamp (epoch ms)
  
  tradingVolume: string; // Total trading volume in USDT
  commissionVolume: string; // Commission amount in USDT
  
  spotTradingVolume: string; // Spot transaction amount in USDT
  swapTradingVolume: string; // Perpetual contract trading volume in USDT
  stdTradingVolume: string; // Standard contract transaction amount in USDT
  extCopyTradingVolume: string; // Copy trading amount in USDT
  mt5TradingVolume: string; // MT5 trading volume in USDT
  
  spotCommissionVolume: string; // Spot commission rebate in USDT
  swapCommissionVolume: string; // Perpetual contract commission in USDT
  stdCommissionVolume: string; // Standard contract commission in USDT
  extCopyCommissionVolume: string; // Copy trading commission in USDT
  mt5CommissionVolume: string; // MT5 commission in USDT
};

export type BingXAfUser = {
  inviterSid: number; // superiors uid => 주인 ID 인듯 O
  uid: number; // 초대된 유저 uid O
  inviteResult: boolean; // 초대 결과 (true / false) O
  registerDateTime: number; // 등록된 날짜 (timestamp) O
  directInvitation: boolean; // 직접 초대됐는지? O
  deposit: boolean; // O
  trade: boolean; // O
  userLevel: number; // O
  commissionRatio: number; // O
  inviteCode: string; // O
  currentBenefit: number; // O Current welfare method: 0 - No welfare, 1 - Fee cashback, 2 - Perpetual fee discount
  benefitRatio: number;
  benefitExpiration: number;
  kycResult: boolean;
  balanceVolume: string;
  ownInviteCode: string;
};

export type BingXTestData = {
  users: BingXResponse<BingXListResponse<BingXAfUser>>;
  dailyCommission: BingXResponse<BingXListResponse<BingXDailyCommission>>;
}

/**
 *  TODO 따로 업로드를 만들어 두려고 했는데, 'use client' 하위에 있을 시 env 를 못불러오는 구조인 듯 해서 문서만 뒀습니다.
 *  File Upload Related Response
 *
 *  DEFAULT_SERVER_URL + API_PREFIX + '/api/file/upload'
 *  const formData = new FormData();
 *  const file = new File(); // File from file Input => must be 1
 *  const targetUri = 'test' // Must start with slash(/), but if no slash in string, server formats it to start with slash. ex) test => /test
 *  formData.append('file', file);
 *  formData.append('targetUri', targetUri);
 * **/
export type FileInfo = {
  name: string;
  url: string;
  contentType: string;
  size: number;
}