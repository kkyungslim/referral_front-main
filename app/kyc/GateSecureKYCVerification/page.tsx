import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import GateSecureKYCVerificationPage from '@/app/kyc/GateSecureKYCVerification/components/GateSecureKYCVerificationPage';

async function GateioSecureKYCVerification() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <GateSecureKYCVerificationPage />
    </Fragment>
  );
}

export default GateioSecureKYCVerification;
