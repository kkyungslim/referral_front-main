import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BitgetAccountFAQPage from '@/app/kyc/BitgetAccountFAQ/components/BitgetAccountFAQPage';

async function BitgetAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BitgetAccountFAQPage />
    </Fragment>
  );
}

export default BitgetAccountFAQ;
