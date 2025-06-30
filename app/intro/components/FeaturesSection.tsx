'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import CoinBlackIcon from '@/components/icons/CoinBlackIcon';
import IntroShadowIcon from '@/components/icons/IntroShadowIcon';
import EuroBlackIcon from '@/components/icons/EuroBlackIcon';
import CalculatorBlackIcon from '@/components/icons/CalculatorBlackIcon';

function FeaturesSection() {
  useEffect(() => {
    gsap.to('.bouncing-dot', {
      y: -3,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <section>
      <div className="container mx-auto text-white py-6">
        <div className="text-center py-6">
          <p className="text-2xl font-bold">
            <span className="text-xl text-primary">
              <span className="relative inline-block">
                간{' '}
                <span className="bouncing-dot inline-block w-[5px] h-[5px] absolute left-0 right-0 mx-auto top-0  bg-primary rounded-2xl"></span>
              </span>
              <span className="relative inline-block">
                편{' '}
                <span className="bouncing-dot inline-block w-[5px] h-[5px] absolute left-0 right-0 mx-auto top-0 bg-primary rounded-2xl"></span>
              </span>
              하고,&#160;
              <span className="relative inline-block">
                신{' '}
                <span className="bouncing-dot inline-block w-[5px] h-[5px] absolute left-0 right-0 mx-auto top-0 bg-primary rounded-2xl"></span>
              </span>
              <span className="relative inline-block">
                속{' '}
                <span className="bouncing-dot inline-block w-[5px] h-[5px] absolute left-0 right-0 mx-auto top-0 bg-primary rounded-2xl"></span>
              </span>
              하게!
            </span>
            <br />
            안전한 선물거래를 위한
            <br />
            수수료 페이백 플랫폼
            <br />
          </p>
        </div>
        <div className="flex justify-center ">
          <div className={`grid gap-5 mb-6 grid-cols-4 w-full md:grid-cols-3`}>
            <div
              className={`flex bg-primary p-5 rounded-2xl md:flex-col md:justify-center md:items-center md:col-auto flex-row-reverse  justify-between items-end col-span-full `}
            >
              <div className="flex flex-col justify-center items-center">
                <CoinBlackIcon
                  width={90}
                  height={90}
                  className={'bouncing-dot md:w-fit w-5/6'}
                />
                <IntroShadowIcon
                  width={60}
                  height={'auto'}
                  className={'mt-2'}
                />
              </div>
              <div className={`md:text-center md:mt-3`}>
                <p className={`text-black`}>제한없이 자유로운</p>
                <h3 className="text-black font-bold ">수수료 페이백</h3>
              </div>
            </div>
            <div
              className={`flex bg-bg3 p-5 rounded-2xl flex-col justify-center items-center col-span-2 md:col-auto`}
            >
              <div className={`w-full flex justify-end md:justify-center`}>
                <div className="flex flex-col justify-center items-center">
                  <EuroBlackIcon
                    width={90}
                    height={90}
                    className={'bouncing-dot'}
                  />
                  <IntroShadowIcon
                    width={60}
                    height={'auto'}
                    className={'mt-2'}
                  />
                </div>
              </div>
              <div className={`mt-3 text-left md:text-center`}>
                <p className="text-bg4 text-sm md:text-base">
                  파트너쉽과 공식 계약
                </p>
                <h3 className="text-bg4 font-bold">안정성 보장</h3>
              </div>
            </div>
            <div
              className={`flex bg-white p-5 rounded-2xl flex-col justify-center items-center col-span-2 md:col-auto`}
            >
              <div className={`w-full flex md:justify-center justify-end`}>
                <div className={'flex flex-col justify-center items-center'}>
                  <CalculatorBlackIcon
                    width={90}
                    height={90}
                    className={'bouncing-dot'}
                  />
                  <IntroShadowIcon
                    width={60}
                    height={'auto'}
                    className={'mt-2'}
                  />
                </div>
              </div>
              <div className={`mt-3 md:text-center text-left`}>
                <p className="text-black text-sm md:text-base">
                  빠르고 신속한 페이백
                </p>
                <h3 className="text-black font-bold">간편한 신청</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
