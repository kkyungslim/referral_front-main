const PaybackSharedData: {
  step1: {
    input: number | null; // 거래소 인덱스
    value?: number; // 거래소별 수수료율
  };
  step2: {
    input: string; // 레버리지 배율 (인풋 스트링)
    value?: number; // 레버리지 배율
  };
  step3: {
    input: string; // 시드 스트링
    value?: number; // 시드
  };
  step4: {
    input: number | null; // 거래횟수 인덱스
    value?: number; // 하루 거래횟수 값
  };
} = {
  step1: { input: null },
  step2: { input: '' },
  step3: { input: '' },
  step4: { input: null },
};
export default PaybackSharedData;
