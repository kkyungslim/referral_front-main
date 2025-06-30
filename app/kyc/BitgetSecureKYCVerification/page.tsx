import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BitgetSecureKYCVerificationPage from '@/app/kyc/BitgetSecureKYCVerification/components/BitgetSecureKYCVerificationPage';

async function BitgetAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BitgetSecureKYCVerificationPage />
    </Fragment>
  );
}

export default BitgetAccountFAQ;
