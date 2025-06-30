import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import UidLinkPage from '@/app/uidlink/components/UidLinkPage';

async function UidLink({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const user = await serverUser();
  const queries = await searchParams ?? {};
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <UidLinkPage user={user} />
    </Fragment>
  );
}

export default UidLink;
