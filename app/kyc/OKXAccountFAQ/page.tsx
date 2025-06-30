import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import OKXAccountFAQPage from '@/app/kyc/OKXAccountFAQ/components/OKXAccountFAQPage';

async function OKXAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <OKXAccountFAQPage />
    </Fragment>
  );
}

export default OKXAccountFAQ;
