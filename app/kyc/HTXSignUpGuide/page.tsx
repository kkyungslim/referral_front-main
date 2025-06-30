import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import HTXSignUpGuidePage from '@/app/kyc/HTXSignUpGuide/components/HTXSignUpGuidePage';

async function HTXAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <HTXSignUpGuidePage />
    </Fragment>
  );
}

export default HTXAccountFAQ;
