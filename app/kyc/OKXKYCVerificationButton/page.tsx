import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import OKXKYCVerificationButtonPage from '@/app/kyc/OKXKYCVerificationButton/components/OKXKYCVerificationButtonPage';

async function OKXKYCVerificationButton() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <OKXKYCVerificationButtonPage />
    </Fragment>
  );
}

export default OKXKYCVerificationButton;
