import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import HTXSecureKYCVerificationPage from '@/app/kyc/HTXSecureKYCVerification/components/HTXSecureKYCVerificationPage';

async function HTXSecureKYCVerification() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <HTXSecureKYCVerificationPage />
    </Fragment>
  );
}

export default HTXSecureKYCVerification;
