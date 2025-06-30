import React, { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import MyPagePage from '@/app/mypage/components/MyPagePage';
import { redirect } from 'next/navigation';

async function MyPage() {
  const user = await serverUser();
  if (!user) redirect('/');
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <MyPagePage user={user} />
    </Fragment>
  );
}

export default MyPage;
