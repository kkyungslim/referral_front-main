import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import HTXDetailPage from '@/app/partner/HTXDetail/components/HTXDetailPage';
import { APIEventList } from '@/lib/API';

async function HTXDetail() {
  const user = await serverUser();
  const eventList = await APIEventList();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <HTXDetailPage eventList={eventList} />
    </Fragment>
  );
}

export default HTXDetail;
