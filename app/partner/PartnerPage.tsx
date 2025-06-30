import React from 'react';
import PartnerTab from '@/components/PartnerTab';
import PartnerGuide from '@/app/partner/components/PartnerGuide';
import FlowCarousel from '@/components/FlowCaousel';
import { DefaultProps } from '@/lib/types';
import BannerSwiper from '@/components/BannerSwiper';

function PartnerPage({ eventList, bannerList }: DefaultProps) {
  return (
    <div>
      <section>
        <div className="container mx-auto ">
          <div className="text-center py-6">
            <h2>
              테더베이스는 <span className="text-primary">공식 계약</span>을
              통해 <br />
              안전하게 페이백 해드려요.
            </h2>
            <p className="text-front2 mt-2">
              가장 신뢰받는 페이백 플랫폼, 테더베이스
            </p>
          </div>
          <BannerSwiper bannerList={bannerList} />
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <PartnerTab className="my-6" eventList={eventList} />
        </div>
      </section>
      <PartnerGuide />
      <section>
        <div className="container mx-auto py-6 pb-12">
          <div className="text-center mb-6">
            <p className="text-primary">주요 파트너사들과 공식계약 체결</p>
            <h2>
              세계 최고의 가상 자산 거래소들과
              <br />
              함께하는 테더베이스
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <FlowCarousel speed={-1.5} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerPage;
