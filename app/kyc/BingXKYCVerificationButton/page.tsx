import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BingXKYCVerificationButtonPage from '@/app/kyc/BingXKYCVerificationButton/components/BingXKYCVerificationButtonPage';

async function BingXKYCVerificationButton() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BingXKYCVerificationButtonPage />
    </Fragment>
  );
}

export default BingXKYCVerificationButton;
