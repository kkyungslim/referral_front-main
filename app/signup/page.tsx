import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import SignUpPage from './SignUpPage';

async function SignUp() {
  const user = await serverUser();

  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <SignUpPage></SignUpPage>
    </Fragment>
  );
}

export default SignUp;
