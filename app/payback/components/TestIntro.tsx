'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import PaybackTestIntroCoin from '@/assets/images/payback-test-intro-coin.png';
import NumberCounter from '@/components/NumberCounter';
import React, { ComponentState } from 'react';

interface IntroProps {
  setCurrentComponent: React.Dispatch<React.SetStateAction<ComponentState>>;
}

function TestIntro({ setCurrentComponent }: IntroProps) {
  return (
    <>
      <div className="text-left mb-6">
        <h2 className={'md:text-2xl text-[21px]'}>
          내가 돌려받을 수 있는 수수료는 얼마?
          <br />
          <span className="text-primary">지금 바로 조회</span>해보기
        </h2>
        <p className="text-front2 font-semibold">
          30초면 간단하게 조회할 수 있어요!
        </p>
      </div>
      <Card className="border-primary bg-gradient-to-b from-[#EAF9FF] to-white shadow-md">
        <CardContent className="relative p-0">
          <div className="text-center mb-10">
            <h3>
              지금 다른 사람들이
              <br />
              환급받는 수수료는 얼마일까요?
            </h3>
            <p className="font-bold text-5xl mt-3">
              <NumberCounter number={897920} duration={1500}></NumberCounter>
            </p>
          </div>
          <Image
            src={PaybackTestIntroCoin}
            className="mx-auto"
            width={623}
            height={393}
            alt={'페이백 테스트 인트로 코인 아이콘'}
          />
        </CardContent>
      </Card>
      <Button
        className="w-full text-lg py-6 mt-8"
        onClick={() => setCurrentComponent('question')}
      >
        환급 수수료 조회하기
      </Button>
    </>
  );
}

export default TestIntro;
