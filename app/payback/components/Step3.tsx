import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CloseIcon from '@/components/icons/CloseIcon';
import PaybackSharedData from './PaybackSharedData';
import { formatNumber } from '@/lib/utils';

type PaybackTestPageProps = {
  toNextStep: () => void;
  toPrevStep: () => void;
  exchangeName: string;
};

function Step3({ toNextStep, toPrevStep, exchangeName }: PaybackTestPageProps) {
  const [value, _setValue] = useState<string>(PaybackSharedData.step3.input);
  const setValue = (inputValue: string) => {
    PaybackSharedData.step3.input = inputValue;
    PaybackSharedData.step3.value = Number(inputValue);
    _setValue(inputValue);
  };

  const isEmptyValue = (() => {
    try {
      parseInt(value);
      return false;
    } catch (e) {
      // 숫자로 변환할 수 없는 경우 disabled
      return true;
    }
  })();

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
          <span className={'text-primary'}>시드</span>가 얼마나 되시나요?
        </h3>
        <p className={'text-front2 font-semibold'}>
          {exchangeName}에 보유한 총 시드를 입력해주세요.
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
            onChange={(e) => {
              const value = e.target.value.trim();
              const cleaned = value.replace(/[^0-9]/g, '');
              setValue(cleaned);
            }}
            placeholder="시드를 입력해주세요."
            className="border-none shadow-none placeholder-[#bfbfbf] font-semibold text-lg"
          ></Input>
        </div>
        <div className={'flex items-center gap-5'}>
          <p className={'text-[#bfbfbf] text-lg font-bold'}>USDT</p>
          <button className={'cursor-pointer'} onClick={() => setValue('')}>
            <CloseIcon width={15} height={15} color="#bfbfbf" />
          </button>
        </div>
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
            toNextStep();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default Step3;
