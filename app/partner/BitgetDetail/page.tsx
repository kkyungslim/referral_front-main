import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import BitgetDetailPage from '@/app/partner/BitgetDetail/components/BitgetDetailPage';
import { APIEventList } from '@/lib/API';

async function BitgetDetail() {
  const user = await serverUser();
  const eventList = await APIEventList();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <BitgetDetailPage eventList={eventList} />
    </Fragment>
  );
}

export default BitgetDetail;
