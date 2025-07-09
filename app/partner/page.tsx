import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import PartnerPage from './PartnerPage';
import { APIEventList, APIGetBanner } from '@/lib/API';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제휴 거래소 - 테더베이스',
  description: '테더베이스와 제휴된 거래소 목록을 확인하세요. 비트겟, 게이트, 빙엑스 등 셀퍼럴 가능한 거래소 소개.',
  keywords: ['제휴 거래소', 'Bitget 셀퍼럴', 'Gate 제휴', '테더베이스 파트너'],
  openGraph: {
    title: '제휴 거래소 - 테더베이스',
    description: '테더베이스에서 셀퍼럴이 가능한 제휴 거래소 안내',
    url: 'https://tetherbase.io/partner',
    siteName: '테더베이스',
    images: [
      {
        url: 'https://tetherbase.io/og-image.jpg', // 통일된 이미지
        alt: '테더베이스 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '제휴 거래소 - 테더베이스',
    description: '테더베이스에서 셀퍼럴이 가능한 제휴 거래소 안내',
    images: ['https://tetherbase.io/og-image.jpg'],
  },
};

async function Parnter() {
  const user = await serverUser();
  const eventList = await APIEventList();
  const bannerList = await APIGetBanner('ASSOCIATED');

  console.log(bannerList);
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <PartnerPage eventList={eventList} bannerList={bannerList}></PartnerPage>
    </Fragment>
  );
}

export default Parnter;
