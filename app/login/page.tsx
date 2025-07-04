// app/login/page.tsx
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import LoginPage from './LoginPage';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원 로그인 - 테더베이스',
  description: '테더베이스에 로그인하여 거래소 페이백 내역을 확인하세요.',
  keywords: ['테더베이스 로그인', '회원 로그인', '거래소 페이백 내역'],
  openGraph: {
    title: '회원 로그인 - 테더베이스',
    description: '테더베이스 로그인 페이지',
    url: 'https://tetherbase.io/login',
    siteName: '테더베이스',
    images: [{ url: 'https://tetherbase.io/og-login.jpg', alt: '로그인 대표 이미지' }],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default async function Login({
  searchParams,
}: {
  searchParams: { email?: string };
}) {
  const user = await serverUser();

  if (user) {
    redirect('/');
  }

  const email = searchParams.email ?? '';

  return (
    <Fragment>
      <GlobalNavigation user={user} />
      <LoginPage email={email} />
    </Fragment>
  );
}
