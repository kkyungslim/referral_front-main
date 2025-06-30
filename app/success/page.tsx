import GlobalNavigation from '@/components/GlobalNavigation';
import React, { Fragment } from 'react';
import { serverUser } from '@/lib/server/ServerUtils';
import SuccessPage from '@/app/success/SuccessPage';

async function Success() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <SuccessPage />
    </Fragment>
  );
}

export default Success;
