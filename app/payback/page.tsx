import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import PaybackTestPage from './components/PaybackTestPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '페이백 테스트 - 테더베이스',
  description:
    '셀퍼럴로 거래 시 얼마나 수수료 페이백을 받을 수 있는지 확인해보세요. 거래 금액, 수수료율에 따른 실시간 리워드 시뮬레이션 제공!',
  keywords: [
    '페이백 계산기',
    '셀퍼럴 시뮬레이션',
    '수수료 페이백 계산',
    '거래소 리워드 계산기',
    '테더베이스 페이백 테스트',
    '셀퍼럴 수수료 계산기',
    'Bitget 페이백',
    'Gate 수수료 환급',
  ],
  openGraph: {
    title: '페이백 테스트 - 테더베이스',
    description:
      '테더베이스 페이백 테스트로 거래 금액과 수수료를 입력하면, 셀퍼럴 기반의 예상 리워드를 실시간으로 확인할 수 있습니다.',
    url: 'https://tetherbase.io/payback',
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
    title: '페이백 테스트 - 테더베이스',
    description:
      '거래 금액과 수수료율만 입력하면, 테더베이스의 셀퍼럴 기반 리워드를 실시간 계산해드립니다.',
    images: ['https://tetherbase.io/og-image.jpg'],
  },
};

async function PaybackTest() {
  const user = await serverUser();

  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <PaybackTestPage></PaybackTestPage>
    </Fragment>
  );
}

export default PaybackTest;
