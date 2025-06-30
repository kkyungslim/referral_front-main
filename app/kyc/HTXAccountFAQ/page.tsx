import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import HTXAccountFAQPage from '@/app/kyc/HTXAccountFAQ/components/HTXAccountFAQPage';

async function HTXAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <HTXAccountFAQPage />
    </Fragment>
  );
}

export default HTXAccountFAQ;
