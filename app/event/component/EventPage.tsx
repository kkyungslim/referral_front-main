import { StaticImageData } from 'next/image'; // StaticImageData import
import BtbitBanner01 from '@/assets/images/TESTBanner.png';
import BtbitBanner02 from '@/assets/images/testBanner02.png';

import BannerSwiper from '@/components/BannerSwiper';
import EventTab from '@/app/event/component/EventTab';
import { DefaultProps } from '@/lib/types';

type BannerData = {
  name: string;
  url: string;
  pcimage: StaticImageData;
  moimage: StaticImageData;
};

function EventPage({ eventList, bannerList }: DefaultProps) {
  return (
    <>
      <section>
        <div className="container mx-auto py-12">
          <div className={'text-center'}>
            <h2>
              테더베이스 ds<span className={'text-primary'}>제휴 이벤트</span>
            </h2>
            <p className={'text-front2 font-semibold mb-5'}>
              테더베이스에서만 확인할 수 있는 이벤트입니다.
            </p>
          </div>
          <BannerSwiper bannerList={bannerList} />
        </div>
      </section>
      <EventTab eventList={eventList} />
    </>
  );
}

export default EventPage;
