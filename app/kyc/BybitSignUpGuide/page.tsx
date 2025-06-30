import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BybitSignUpGuidePage from '@/app/kyc/BybitSignUpGuide/components/BybitSignUpGuidePage';

async function BybitAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BybitSignUpGuidePage />
    </Fragment>
  );
}

export default BybitAccountFAQ;
