import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import GateSignUpGuidePage from '@/app/kyc/GateSignUpGuide/components/GateSignUpGuidePage';

async function GateioAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <GateSignUpGuidePage />
    </Fragment>
  );
}

export default GateioAccountFAQ;
