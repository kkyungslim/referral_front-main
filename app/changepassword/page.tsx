import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import ChangePasswordPage from '@/app/changepassword/components/ChangePasswordPage';
import { redirect } from 'next/navigation';

async function ChangePassword() {
  const user = await serverUser();
  if (!user) redirect('/');
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <ChangePasswordPage />
    </Fragment>
  );
}

export default ChangePassword;
