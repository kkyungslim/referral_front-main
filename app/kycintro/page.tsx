import React, { Fragment } from 'react';
import KycIntroPage from '@/app/kycintro/KycIntroPage';
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';

async function KycIntro() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <KycIntroPage />
    </Fragment>
  );
}

export default KycIntro;
