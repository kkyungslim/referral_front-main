import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import OKXSignUpGuidePage from '@/app/kyc/OKXSignUpGuide/components/OKXSignUpGuidePage';

async function OKXAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <OKXSignUpGuidePage />
    </Fragment>
  );
}

export default OKXAccountFAQ;
