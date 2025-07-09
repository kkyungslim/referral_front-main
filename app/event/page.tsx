import { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import EventPage from '@/app/event/component/EventPage';
import { APIEventList, APIGetBanner } from '@/lib/API';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이벤트 안내 - 테더베이스',
  description: '비트겟, 게이트, 빙엑스 등 거래소 페이백 이벤트와 셀퍼럴 프로모션을 한눈에 확인하세요.',
  keywords: ['거래소 이벤트', '테더베이스 이벤트', '셀퍼럴 이벤트', '비트겟 이벤트'],
  openGraph: {
    title: '이벤트 안내 - 테더베이스',
    description: '최신 거래소 이벤트 및 셀퍼럴 페이백 정보 제공',
    url: 'https://tetherbase.io/event',
    siteName: '테더베이스',
    images: [
      {
        url: 'https://tetherbase.io/og-image.jpg',
        alt: '테더베이스 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이벤트 안내 - 테더베이스',
    description: '최신 거래소 이벤트 및 셀퍼럴 페이백 정보 제공',
    images: ['https://tetherbase.io/og-image.jpg'],
  },
};

async function Event() {
  const user = await serverUser();
  const eventList = await APIEventList();
  const bannerList = await APIGetBanner('EVENT');

  return (
    <Fragment>
      <GlobalNavigation user={user} />
      <EventPage eventList={eventList} bannerList={bannerList} />
    </Fragment>
  );
}

export default Event;
