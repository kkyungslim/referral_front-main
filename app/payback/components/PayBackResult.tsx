'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Result1 from '@/app/payback/components/Result1';
import Result2 from '@/app/payback/components/Result2';
import Result3 from '@/app/payback/components/Result3';
import Result4 from '@/app/payback/components/Result4';

type ComponentState = 'result' | 'question' | 'intro';

interface PayBackResultProps {
  currentComponent: ComponentState;
  setCurrentComponent: React.Dispatch<React.SetStateAction<ComponentState>>;
  resultValue: number;
  selectedMarket: number;
  resultData: PaybackTestResultData | null;
}

export type PaybackTestResultData = {
  resultValue: number;
  selectedMarket: number;
  leverage: number;
  seed: number;
  transactionFreq: number; // 거래 빈도 -> 1, 2, 3, 5, 10
};

function PayBackResult({
  setCurrentComponent,
  resultValue,
  resultData,
  selectedMarket,
}: PayBackResultProps) {
  const [result, setResult] = useState(0);
  const toNextStep = () => {
    setResult((prev) => Math.min(Results.length - 1, prev + 1)); // 최대 단계보다 못 넘어가게
  };
  const toPrevStep = () => {
    setResult((prev) => Math.max(0, prev - 1)); // 최소 단계보다 못 내려가게
  };

  if (!resultData) {
    return null;
  }

  const Results = [
    <Result1 resultData={resultData} />,
    <Result3 resultData={resultData} />,
    <Result4 resultData={resultData} />,
  ];
  return (
    <>
      {Results[result]}
      <div className="mt-10">
        {result < Results.length - 1 ? (
          <div className="grid grid-cols-2 gap-4 justify-center">
            <Button
              className={'py-6 text-md rounded-2xl'}
              variant={'gray'}
              onClick={() => {
                if (result === 0) setCurrentComponent('question');
                else toPrevStep();
                console.log(result);
              }}
            >
              이전
            </Button>
            <Button
              className={'py-6 text-md rounded-2xl'}
              onClick={() => {
                toNextStep();
                console.log(result);
              }}
            >
              다음
            </Button>
          </div>
        ) : (
          <div>
            <Button
              className={'w-full py-6 text-md rounded-2xl'}
              onClick={() => {
                window.location.href = '/';
              }}
            >
              홈으로
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default PayBackResult;
