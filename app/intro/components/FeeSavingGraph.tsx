'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import BingXBoxIcon from '@/components/icons/BIngXBoxIcon';
import OKXBoxIcon from '@/components/icons/OKXBoxIcon';
import HTXBoxIcon from '@/components/icons/HTXBoxIcon';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';

function FeeSavingGraph() {
  const tabData = [
    {
      title: 'Bitget',
      icon: <BitgetBoxIcon width={40} height={40} />,
      base: { label: '테더베이스', height: 30, value: 1.8 },
      referral: { label: '타사<br/>셀퍼럴', height: 70, value: 2.6 },
      influencer: { label: '인플루언서<br/>링크', height: 130, value: 10 },
    },
    {
      title: 'Gate',
      icon: <GateIoBoxIcon width={40} height={40} />,
      base: { label: '테더베이스', height: 30, value: 1.8 },
      referral: { label: '타사<br/>셀퍼럴', height: 60, value: 2.4 },
      influencer: { label: '인플루언서<br/>링크', height: 140, value: 5 },
    },
    {
      title: 'BingX',
      icon: <BingXBoxIcon width={40} height={40} />,
      base: { label: '테더베이스', height: 30, value: 1.8 },
      referral: { label: '타사<br/>셀퍼럴', height: 60, value: 2.4 },
      influencer: { label: '인플루언서<br/>링크', height: 140, value: 5 },
    },
    {
      title: 'HTX',
      icon: <HTXBoxIcon width={40} height={40} />,
      base: { label: '테더베이스', height: 40, value: 3.1 },
      referral: { label: '타사<br/>셀퍼럴', height: 80, value: 4.2 },
      influencer: { label: '인플루언서<br/>링크', height: 140, value: 5 },
    },
    {
      title: 'OKX',
      icon: <OKXBoxIcon width={40} height={40} />,
      base: { label: '테더베이스', height: 30, value: 2.1 },
      referral: { label: '타사<br/>셀퍼럴', height: 70, value: 3 },
      influencer: { label: '인플루언서<br/>링크', height: 140, value: 5 },
    },
    {
      title: 'Bybit',
      icon: <BybitBoxIcon width={40} height={40} />,
      base: { label: '테더베이스', height: 40, value: 3.1 },
      referral: { label: '타사<br/>셀퍼럴', height: 80, value: 4 },
      influencer: { label: '인플루언서<br/>링크', height: 140, value: 5.5 },
    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].title);

  const baseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const referralRefs = useRef<(HTMLDivElement | null)[]>([]);
  const influencerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    tabData.forEach((tab, index) => {
      const isActive = activeTab === tab.title;

      const baseEl = baseRefs.current[index];
      const referralEl = referralRefs.current[index];
      const influencerEl = influencerRefs.current[index];

      if (baseEl) {
        gsap.to(baseEl, {
          height: isActive ? `${tab.base.height}px` : '0px',
          duration: 0.5,
          ease: 'power2.out',
        });
      }

      if (referralEl) {
        gsap.to(referralEl, {
          height: isActive ? `${tab.referral.height}px` : '0px',
          duration: 0.5,
          ease: 'power2.out',
        });
      }

      if (influencerEl) {
        gsap.to(influencerEl, {
          height: isActive ? `${tab.influencer.height}px` : '0px',
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });
  }, [activeTab]);

  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="text-white text-center mb-8">
          <h2 className="font-bold text-xl leading-relaxed">
            {activeTab} 유저시군요!
            <br />
            <span className="text-primary">테더베이스</span>를 사용할 때,
            <br />
            <span className="text-primary text-2xl font-extrabold">
              {(
                tabData.find((t) => t.title === activeTab)!.influencer.value -
                tabData.find((t) => t.title === activeTab)!.base.value
              ).toFixed(1)}
              만원
            </span>{' '}
            더 아낄 수 있어요!
          </h2>
          <p className="mt-2 text-xs text-gray-400">
            * 시드 100만원 / 레버리지 100배 적용시, 1회 거래당 발생 수수료
          </p>
        </div>

        <Tabs
          defaultValue={tabData[0].title}
          className="justify-center items-center md:flex-col flex-row"
        >
          <TabsList className="bg-bg4 h-auto rounded-sm md:mb-8 md:flex-row mb-0 flex-col">
            {tabData.map((item) => (
              <TabsTrigger
                key={item.title}
                value={item.title}
                onClick={() => setActiveTab(item.title)}
                className="opacity-70 border-0 h-auto data-[state=active]:opacity-100 data-[state=active]:shadow-none data-[state=active]:bg-transparent [&_svg:not([class*='size-'])]:size-auto"
              >
                {item.icon}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabData.map((item, index) => (
            <TabsContent
              key={item.title}
              value={item.title}
              className="saving_graph"
            >
              <div className="flex justify-center items-end gap-7 md:gap-20 mt-10 h-[200px]">
                {/* 테더베이스 */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-primary">
                    {item.base.value}만원
                  </span>
                  <div
                    ref={(el) => {
                      baseRefs.current[index] = el;
                    }}
                    className="w-[35px] md:w-[50px] bg-primary rounded-lg"
                  />

                  <span className="text-xs text-primary h-[32px]">
                    {item.base.label}
                  </span>
                </div>

                {/* 타사 셀퍼럴 */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-white">
                    {item.referral.value}만원
                  </span>
                  <div
                    ref={(el) => {
                      referralRefs.current[index] = el;
                    }}
                    className="w-[35px] md:w-[50px] bg-gray-400 rounded-lg overflow-hidden"
                  />
                  <span
                    className="text-xs text-white text-center"
                    dangerouslySetInnerHTML={{ __html: item.referral.label }}
                  />
                </div>

                {/* 인플루언서 링크 */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-white">
                    {item.influencer.value}만원
                  </span>
                  <div
                    ref={(el) => {
                      influencerRefs.current[index] = el;
                    }}
                    className="w-[35px] md:w-[50px] bg-gray-400 rounded-lg overflow-hidden"
                  />
                  <span
                    className="text-xs text-white text-center"
                    dangerouslySetInnerHTML={{ __html: item.influencer.label }}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default FeeSavingGraph;
