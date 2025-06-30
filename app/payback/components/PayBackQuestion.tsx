'use client';
import React, { useEffect, useRef, useState } from 'react';
import Step1 from '@/app/payback/components/Step1';
import Step2 from '@/app/payback/components/Step2';
import Step3 from '@/app/payback/components/Step3';
import Step4 from '@/app/payback/components/Step4';
import gsap from 'gsap';
import PaybackSharedData from './PaybackSharedData';
import { PaybackTestResultData } from '@/app/payback/components/PayBackResult';

type ComponentState = 'result' | 'question' | 'intro';

interface PayBackQuestionProps {
  currentComponent: ComponentState;
  setCurrentComponent: React.Dispatch<React.SetStateAction<ComponentState>>;
  setResultValue: React.Dispatch<React.SetStateAction<number>>;
  setSelectedMarket: React.Dispatch<React.SetStateAction<number>>;
  setResultData: React.Dispatch<
    React.SetStateAction<PaybackTestResultData | null>
  >;
}

function PayBackQuestion({
  setCurrentComponent,
  setSelectedMarket,
  setResultData,
}: PayBackQuestionProps) {
  const [step, setStep] = useState(0);
  const prevStepRef = useRef(step); // 이전 step 상태를 추적
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedExchangeName, setSelectedExchangeName] = useState<string>('');

  const toNextStep = () => {
    const isLastStep = step === Steps.length - 1;
    if (isLastStep) {
      function calcPaybackResultData() {
        const { step1, step2, step3, step4 } = PaybackSharedData;

        const { value: step1Value } = step1;
        const { value: step2Value } = step2;
        const { value: step3Value } = step3;
        const { value: step4Value } = step4;

        setSelectedMarket(step1.input || 0);

        console.log('calc : ', step1Value, step2Value, step3Value, step4Value);

        // check undefined
        if (
          step1Value === undefined ||
          step2Value === undefined ||
          step3Value === undefined ||
          step4Value === undefined
        ) {
          console.error('값이 정의되지 않았습니다.', {
            step1Value,
            step2Value,
            step3Value,
            step4Value,
          });
          return;
        }

        const 환율 = 1372.68;

        const calcResult =
          step1Value * step2Value * step3Value * step4Value * 환율;
        return {
          resultValue: calcResult,
          selectedMarket: step1.input,
          leverage: step2Value,
          seed: step3Value,
          transactionFreq: step4Value,
        } as PaybackTestResultData;
      }

      const resultData = calcPaybackResultData();
      if (!resultData) {
        return;
      }

      setResultData(resultData);
      setCurrentComponent('result');
      return;
    }

    setStep((prev) => Math.min(Steps.length - 1, prev + 1)); // 최대 단계보다 못 넘어가게
  };

  const toPrevStep = () => {
    if (step === 0) {
      setCurrentComponent('intro');
      return;
    }

    setStep((prev) => Math.max(0, prev - 1)); // 최소 단계보다 못 내려가게
  };

  const Steps = [
    <Step1
      toNextStep={toNextStep}
      toPrevStep={toPrevStep}
      setSelectedExchangeName={setSelectedExchangeName}
    />,
    <Step2 toNextStep={toNextStep} toPrevStep={toPrevStep} />,
    <Step3
      toNextStep={toNextStep}
      toPrevStep={toPrevStep}
      exchangeName={selectedExchangeName}
    />,
    <Step4 toNextStep={toNextStep} toPrevStep={toPrevStep} />,
  ];

  // step 값이 업데이트 될 때마다 이전 값을 저장
  useEffect(() => {
    prevStepRef.current = step;
  }, [step]);

  useEffect(() => {
    progressRefs.current.forEach((progressRef, index) => {
      if (progressRef) {
        const prevStep = prevStepRef.current;
        if (index === step) {
          gsap.fromTo(
            progressRef,
            { width: '0%' }, // 애니메이션 시작 위치 (0%)
            {
              width: '100%', // 애니메이션 종료 위치 (100%)
              duration: 0.5,
            },
          );
        }
      }
    });
  }, [step]);

  return (
    <>
      <ul className={'grid grid-cols-4 gap-5 mb-10'}>
        {Array.from({ length: Steps.length }, (_, index) => (
          <li
            key={index}
            className="rounded-4xl h-[12px] overflow-hidden bg-bg1"
          >
            <div
              ref={(el: HTMLDivElement | null) => {
                progressRefs.current[index] = el;
              }}
              className={`h-full ${index <= step ? 'bg-primary' : ''}`}
            ></div>
          </li>
        ))}
      </ul>
      {Steps[step]}
    </>
  );
}

export default PayBackQuestion;
