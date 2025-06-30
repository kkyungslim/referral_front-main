import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BtbitKYCVerificationButtonPage from '@/app/kyc/BybitKYCVerificationButton/components/BtbitKYCVerificationButtonPage';

async function BybitAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BtbitKYCVerificationButtonPage />
    </Fragment>
  );
}

export default BybitAccountFAQ;
