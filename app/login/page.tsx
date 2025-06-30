// app/login/page.tsx
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import LoginPage from './LoginPage';
import { redirect } from 'next/navigation';

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
