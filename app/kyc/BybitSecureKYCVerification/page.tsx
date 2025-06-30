import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BybitSecureKYCVerificationPage from '@/app/kyc/BybitSecureKYCVerification/components/BybitSecureKYCVerificationPage';

async function BybitAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BybitSecureKYCVerificationPage />
    </Fragment>
  );
}

export default BybitAccountFAQ;
