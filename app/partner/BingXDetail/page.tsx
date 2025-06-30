import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import BingXDetailPage from '@/app/partner/BingXDetail/components/BingXDetailPage';
import { APIEventList } from '@/lib/API';

async function BingXDetail() {
  const user = await serverUser();
  const eventList = await APIEventList();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BingXDetailPage eventList={eventList} />
    </Fragment>
  );
}

export default BingXDetail;
