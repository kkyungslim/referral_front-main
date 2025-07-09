import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import SignUpPage from './SignUpPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입 - 테더베이스',
  description:
    '지금 테더베이스에 회원가입하고 셀퍼럴을 통한 수수료 페이백을 시작하세요. 누구나 간편하게 리워드를 받을 수 있습니다.',
  keywords: [
    '테더베이스 회원가입',
    '회원가입',
    '페이백 시작하기',
    '셀퍼럴 등록',
    '계정 생성',
    '거래소 수수료 환급',
    '암호화폐 리워드 플랫폼',
  ],
  openGraph: {
    title: '회원가입 - 테더베이스',
    description:
      '테더베이스에 지금 가입하고 거래소 수수료의 최대 80%까지 리워드를 받아보세요. 비트겟, 게이트, 빙엑스 등 다양한 거래소 지원!',
    url: 'https://tetherbase.io/register',
    siteName: '테더베이스',
    images: [
      {
        url: 'https://tetherbase.io/og-register.jpg',
        alt: '회원가입 및 리워드 시작 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

async function SignUp() {
  const user = await serverUser();

  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <SignUpPage></SignUpPage>
    </Fragment>
  );
}

export default SignUp;
