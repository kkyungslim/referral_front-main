import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BitgetKYCVerificationButtonPage from '@/app/kyc/BitgetKYCVerificationButton/components/BitgetKYCVerificationButtonPage';

async function BitgetKYCVerificationButton() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BitgetKYCVerificationButtonPage />
    </Fragment>
  );
}

export default BitgetKYCVerificationButton;
