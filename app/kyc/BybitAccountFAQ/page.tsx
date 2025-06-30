import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BybitAccountFAQPage from '@/app/kyc/BybitAccountFAQ/components/BybitAccountFAQPage';

async function BybitAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BybitAccountFAQPage />
    </Fragment>
  );
}

export default BybitAccountFAQ;
