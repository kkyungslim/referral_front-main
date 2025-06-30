import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import ResetPasswordPage from '@/app/resetpassword/components/ResetPasswordPage';

async function ResetPassword() {
  const user = await serverUser();

  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <ResetPasswordPage user={user} />
    </Fragment>
  );
}

export default ResetPassword;
