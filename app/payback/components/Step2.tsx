'use client';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CloseIcon from '@/components/icons/CloseIcon';
import PaybackSharedData from './PaybackSharedData';
import { formatNumber, notNumber } from '@/lib/utils';

type PaybackTestPageProps = {
  toNextStep: () => void;
  toPrevStep: () => void;
};

function Step2({ toNextStep, toPrevStep }: PaybackTestPageProps) {
  const [value, _setValue] = useState<string>(PaybackSharedData.step2.input);

  const isEmptyValue = (() => {
    try {
      parseInt(value);
      return false;
    } catch (e) {
      // 숫자로 변환할 수 없는 경우 disabled
      return true;
    }
  })();

  const setValue = (inputValue: string) => {
    PaybackSharedData.step2.input = inputValue;
    PaybackSharedData.step2.value = Number(inputValue);
    _setValue(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.trim();
    // 숫자만 필터링
    const cleaned = rawValue.replace(/[^0-9]/g, '');

    // 숫자 범위 제한 (1 ~ 125)
    if (parseInt(cleaned) > 125) {
      setValue('125'); // 범위를 넘으면 최대값 125로 제한
    } else if (parseInt(cleaned) < 1) {
      setValue('1'); // 최소값 1로 제한
    } else {
      setValue(cleaned); // 정상 범위 내에서는 입력값을 그대로 사용
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !isEmptyValue) {
        toNextStep();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEmptyValue, toNextStep]);

  return (
    <div>
      <div className={'text-center'}>
        <h3>
          <span className={'text-primary'}>레버리지 </span>얼마나 사용하시나요?
        </h3>
        <p className={'text-front2 font-semibold'}>
          평균적인 레버리지 배율을 입력해주세요.
        </p>
      </div>
      <div
        className={
          'flex justify-between border-b-2 border-primary pr-3 pb-1 my-10'
        }
      >
        <div className={'w-full'}>
          <Input
            focusOnRender
            value={formatNumber(value)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={handleChange}
            placeholder="< 1 ~ 125 > 숫자를 입력하세요."
            className=" border-none shadow-none placeholder-[#bfbfbf] font-semibold text-lg"
          ></Input>
        </div>
        <button className={'cursor-pointer'} onClick={() => setValue('')}>
          <CloseIcon width={15} height={15} color="#bfbfbf" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center">
        <Button
          className={'py-6 text-md rounded-2xl'}
          variant={'gray'}
          onClick={() => {
            toPrevStep();
          }}
        >
          이전
        </Button>
        <Button
          className={'py-6 text-md rounded-2xl'}
          disabled={value === ''}
          onClick={() => {
            if (isEmptyValue) {
              return;
            }
            toNextStep();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default Step2;
