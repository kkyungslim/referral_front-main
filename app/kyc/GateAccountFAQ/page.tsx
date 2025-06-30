import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import GateAccountFAQPage from '@/app/kyc/GateAccountFAQ/components/GateAccountFAQPage';

async function GateAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <GateAccountFAQPage />
    </Fragment>
  );
}

export default GateAccountFAQ;
