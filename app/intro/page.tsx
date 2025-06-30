import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import IntroPage from './IntroPage';

async function Intro() {
  const user = await serverUser();
  return (
    <Fragment>
      <GlobalNavigation user={user} />
      <IntroPage></IntroPage>
    </Fragment>
  );
}

export default Intro;
