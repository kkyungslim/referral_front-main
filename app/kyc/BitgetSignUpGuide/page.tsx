import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import BitgetSignUpGuidePage from '@/app/kyc/BitgetSignUpGuide/components/BitgetSignUpGuidePage';

async function BitgetAccountFAQ() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BitgetSignUpGuidePage />
    </Fragment>
  );
}

export default BitgetAccountFAQ;
