import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BingXAccountFAQPage from '@/app/kyc/BingXAccountFAQ/components/BingXAccountFAQPage';

async function BingXAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BingXAccountFAQPage />
    </Fragment>
  );
}

export default BingXAccountFAQ;
