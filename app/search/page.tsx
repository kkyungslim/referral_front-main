import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';

async function Search() {
  const user = await serverUser();

  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <div>Page</div>
    </Fragment>
  );
}

export default Search;
