'use client';
import React from 'react';
import PlusIcon from '@/components/icons/PlusIcon';
import ShadowIcon from '@/components/icons/ShadowIcon';
import GiftIcon from '@/components/icons/GiftIcon';
import BalloonIcon from '@/components/icons/BalloonIcon';
import CalculatorIcon from '@/components/icons/calculatorIcon';
import { useRouter } from 'next/navigation';

function PartnerGuide() {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto py-6">
        <div className={`grid gap-3 md:grid-cols-4 grid-cols-2`}>
          <div className="flex flex-col justify-between p-4">
            <div className="flex justify-end">
              <PlusIcon width={25} height={25} />
            </div>
            <div>
              <h4 className="font-bold mb-4">
                <span className={'text-lg md:text-xl'}>효율적인</span>
                <br />
                <span className="text-primary">테더베이스 사용법</span>
              </h4>
              <ShadowIcon width={'100%'} height={'auto'} />
            </div>
          </div>
          <div
            className="flex flex-col p-4 border-primary border rounded-2xl border-5 justify-between cursor-pointer"
            onClick={() => router.push('/event')}
          >
            <GiftIcon width={60} height={60} />
            <p className="font-bold">테더베이스 이벤트</p>
            <h5 className="text-front2">
              지금 가장
              <br />
              핫한 이벤트는?
            </h5>
          </div>
          <div
            className="flex flex-col p-4 border-primary border rounded-2xl border-5 justify-between cursor-pointer"
            onClick={() => router.push('/kycintro')}
          >
            <BalloonIcon width={60} height={60} />
            <p className="font-bold">KYC 인증방법</p>
            <h5 className="text-front2">
              페이백 계정
              <br />
              이용 가이드
            </h5>
          </div>
          <div
            className="flex flex-col p-4 border-info border rounded-2xl border-5 justify-between cursor-pointer"
            onClick={() => router.push('/payback')}
          >
            <CalculatorIcon width={60} height={60} />
            <p className="font-bold">페이백 테스트</p>
            <h5 className="text-front2">
              <br />
              내가 받을
              <br />
              환급액은 얼마?
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerGuide;
