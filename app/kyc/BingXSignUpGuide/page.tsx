import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BingXSignUpGuidePage from '@/app/kyc/BingXSignUpGuide/components/BingXSignUpGuidePage';

async function BingXAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BingXSignUpGuidePage />
    </Fragment>
  );
}

export default BingXAccountFAQ;
