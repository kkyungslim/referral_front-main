import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BingXSecureKYCVerificationPage from '@/app/kyc/BingXSecureKYCVerification/components/BingXSecureKYCVerificationPage';

async function BingXSecureKYCVerification() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BingXSecureKYCVerificationPage />
    </Fragment>
  );
}

export default BingXSecureKYCVerification;
