import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import PaybackSharedData from './PaybackSharedData';

const transactionFrequencyData = [
  {
    label: '하루 1회 미만',
    count: 1,
  },
  {
    label: '하루 1회 ~ 2회 거래',
    count: 2,
  },
  {
    label: '하루2회 ~ 5회 거래',
    count: 3,
  },
  {
    label: '하루5회 ~ 10회 거래',
    count: 5,
  },
  {
    label: '하루 10회 이상 거래',
    count: 10,
  },
] as const;

type PaybackTestPageProps = {
  toNextStep: () => void;
  toPrevStep: () => void;
};

function Step4({ toNextStep, toPrevStep }: PaybackTestPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    PaybackSharedData.step4.input,
  );

  const handleClick = (index: number) => {
    if (index < 0 || index >= transactionFrequencyData.length) {
      return;
    }
    PaybackSharedData.step4.input = index;
    PaybackSharedData.step4.value = transactionFrequencyData[index].count;
    setSelectedIndex(index);
  };

  const isEmptyValue = selectedIndex === null;

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
          하루에 <span className={'text-primary'}>몇 번 정도</span>{' '}
          거래하시나요?
        </h3>
        <p className={'text-front2 font-semibold'}>거래 빈도를 입력해주세요.</p>
      </div>
      <div className={'flex flex-col items-center gap-4  my-10'}>
        {transactionFrequencyData.map((item, index) => (
          <div
            className={`border-2 border-primary w-full text-center py-3 rounded-2xl ${selectedIndex === index ? 'bg-primary' : ''}`}
            key={`transactionFrequencyData${index}`}
            onClick={() => handleClick(index)}
          >
            <h5
              className={`text-front2 font-bold ${selectedIndex === index ? 'text-white' : ''}`}
            >
              {item.label}
            </h5>
          </div>
        ))}
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
          disabled={selectedIndex === null}
          onClick={() => {
            if (selectedIndex === null) {
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

export default Step4;
