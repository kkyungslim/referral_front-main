import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import GateKYCVerificationButtonPage from '@/app/kyc/GateKYCVerificationButton/components/GateKYCVerificationButtonPage';

async function GateioKYCVerificationButton() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <GateKYCVerificationButtonPage />
    </Fragment>
  );
}

export default GateioKYCVerificationButton;
