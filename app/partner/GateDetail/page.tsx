import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import GateDetailPage from '@/app/partner/GateDetail/components/GateDetailPage';
import { APIEventList } from '@/lib/API';

async function GateDetail() {
  const user = await serverUser();
  const eventList = await APIEventList();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <GateDetailPage eventList={eventList} />
    </Fragment>
  );
}

export default GateDetail;
