import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import PaybackTestPage from './components/PaybackTestPage';

async function PaybackTest() {
  const user = await serverUser();

  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <PaybackTestPage></PaybackTestPage>
    </Fragment>
  );
}

export default PaybackTest;
