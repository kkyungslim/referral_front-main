'use client';
import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import OKXBoxIcon from '@/components/icons/OKXBoxIcon';
import BingXBoxIcon from '@/components/icons/BIngXBoxIcon';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';
import HTXBoxIcon from '@/components/icons/HTXBoxIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function KycIntroPage(props: {}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // 초기값을 null로 설정
  const exchangeData = [
    {
      name: 'Bybit',
      url: <BybitBoxIcon width={32} height={32} />,
    },
    {
      name: 'Bitget',
      url: <BitgetBoxIcon width={32} height={32} />,
    },
    {
      name: 'OKX',
      url: <OKXBoxIcon width={32} height={32} />,
    },
    {
      name: 'BingX',
      url: <BingXBoxIcon width={32} height={32} />,
    },
    {
      name: 'Gate',
      url: <GateIoBoxIcon width={32} height={32} />,
    },
    {
      name: 'HTX',
      url: <HTXBoxIcon width={32} height={32} />,
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedIndex(index); // 클릭된 카드의 인덱스를 저장
  };

  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>
            페이백 계정 만드는 방법이 <br />
            궁금한 거래소를 선택해주세요.
          </h2>
          <p className={'text-front2 font-semibold mt-1'}>
            KYC 인증 방법을 자세히 알려드릴세요.
          </p>
        </div>
        <div className={'grid grid-cols-3 gap-4 flex-wrap items-center my-10'}>
          {exchangeData.map((item, index) => (
            <Card
              onClick={() => handleCardClick(index)}
              className={selectedIndex === index ? 'border-primary' : ''}
              key={index}
            >
              <CardContent className={'px-0 flex flex-col items-center'}>
                <div>{item.url}</div>
                <p>{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <Link
            href={`/kyc/${exchangeData[selectedIndex!]?.name}AccountFAQ`} // 선택된 거래소 이름을 URL 파라미터로 전달
            className={`block text-lg font-bold ${selectedIndex === null ? 'pointer-events-none ' : ''}`}
          >
            <Button
              className={'w-full py-6 rounded-2xl'}
              disabled={selectedIndex === null} // selectedIndex가 null일 때 버튼 비활성화
            >
              다음
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default KycIntroPage;
