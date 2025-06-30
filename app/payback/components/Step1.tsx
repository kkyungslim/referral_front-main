import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import OKXBoxIcon from '@/components/icons/OKXBoxIcon';
import BingXBoxIcon from '@/components/icons/BIngXBoxIcon';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';
import HTXBoxIcon from '@/components/icons/HTXBoxIcon';
import PaybackSharedData from './PaybackSharedData';

const exchangeData = [
  {
    name: 'Bybit',
    url: <BybitBoxIcon width={32} height={32} />,
    feeRate: 0.0001,
  },
  {
    name: 'Bitget',
    url: <BitgetBoxIcon width={32} height={32} />,
    feeRate: 0.0001,
  },
  {
    name: 'OKX',
    url: <OKXBoxIcon width={32} height={32} />,
    feeRate: 0.0001,
  },
  {
    name: 'BingX',
    url: <BingXBoxIcon width={32} height={32} />,
    feeRate: 0.0001,
  },
  {
    name: 'Gate',
    url: <GateIoBoxIcon width={32} height={32} />,
    feeRate: 0.0001,
  },
  {
    name: 'HTX',
    url: <HTXBoxIcon width={32} height={32} />,
    feeRate: 0.01,
  },
] as const;

type PaybackTestPageProps = {
  toNextStep: () => void;
  toPrevStep: () => void;
  setSelectedExchangeName: (name: string) => void; // 👈 추가
};

function Step1({
  toNextStep,
  toPrevStep,
  setSelectedExchangeName,
}: PaybackTestPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    PaybackSharedData.step1.input,
  );

  const handleCardClick = (index: number) => {
    const { name, feeRate } = exchangeData[index];
    if (!feeRate) return;

    PaybackSharedData.step1.input = index;
    PaybackSharedData.step1.value = feeRate;

    setSelectedExchangeName(name); // 👈 전달
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
          <span className={'text-primary'}>가장 자주 쓰는 거래소 </span>하나를
          선택해 주세요.
        </h3>
        <p className={'text-front2 font-semibold'}>
          어떤 거래소를 이용 중이신가요?
        </p>
      </div>
      <div className={'grid grid-cols-3 gap-4 flex-wrap items-center my-10'}>
        {exchangeData.map((item, index) => (
          <Card
            onClick={() => handleCardClick(index)}
            className={selectedIndex === index ? 'border-primary' : ''}
            key={`paybacktest-step1-${item.name}`}
          >
            <CardContent className={'px-0 flex flex-col items-center'}>
              <div>{item.url}</div>
              <p>{item.name}</p>
            </CardContent>
          </Card>
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
          onClick={() => {
            if (selectedIndex === null) {
              return;
            }

            toNextStep();
          }}
          disabled={selectedIndex === null}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default Step1;
