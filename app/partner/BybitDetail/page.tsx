import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import BybitDetailPage from '@/app/partner/BybitDetail/components/BybitDetailPage';
import { APIEventList } from '@/lib/API';

async function BybitDetail() {
  const user = await serverUser();
  const eventList = await APIEventList();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BybitDetailPage eventList={eventList} />
    </Fragment>
  );
}

export default BybitDetail;
