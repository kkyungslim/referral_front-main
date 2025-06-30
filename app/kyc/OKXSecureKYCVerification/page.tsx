import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import OKXSecureKYCVerificationPage from '@/app/kyc/OKXSecureKYCVerification/components/OKXSecureKYCVerificationPage';

async function OKXSecureKYCVerification() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <OKXSecureKYCVerificationPage />
    </Fragment>
  );
}

export default OKXSecureKYCVerification;
