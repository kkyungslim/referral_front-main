import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import IntroPage from './IntroPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서비스 소개 - 테더베이스',
  description:
    '테더베이스는 안전하고 신뢰할 수 있는 글로벌 수수료 페이백 플랫폼입니다. 셀퍼럴 기반 페이백, 공식 거래소 제휴, 간편한 신청으로 누구나 쉽게 리워드를 받을 수 있습니다.',
  keywords: [
    '테더베이스 소개',
    '페이백 플랫폼',
    '셀퍼럴 수수료 환급',
    '거래소 수수료 리워드',
    'Bitget 페이백',
    'Gate 제휴 플랫폼',
    '암호화폐 수수료 환급',
  ],
  openGraph: {
    title: '테더베이스 소개 - 수수료 페이백 플랫폼',
    description:
      '공식 제휴 거래소와 함께하는 글로벌 수수료 페이백 플랫폼 테더베이스! 셀퍼럴 기반 리워드 시스템으로 평균 월 15 USDT부터 3,500 USDT까지 지급.',
    url: 'https://tetherbase.io/intro',
    siteName: '테더베이스',
    images: [
      {
        url: 'https://tetherbase.io/og-intro.jpg', // 필요 시 public 폴더에 이미지 업로드
        alt: '테더베이스 플랫폼 소개 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

async function Intro() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user} />
      <IntroPage></IntroPage>
    </Fragment>
  );
}

export default Intro;
