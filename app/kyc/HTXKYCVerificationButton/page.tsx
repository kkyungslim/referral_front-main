import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import HTXKYCVerificationButtonPage from '@/app/kyc/HTXKYCVerificationButton/components/HTXKYCVerificationButtonPage';

async function HTXKYCVerificationButton() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <HTXKYCVerificationButtonPage />
    </Fragment>
  );
}

export default HTXKYCVerificationButton;
