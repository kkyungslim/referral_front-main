import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import OKXDetailPage from '@/app/partner/OKXDetail/components/OKXDetailPage';
import { APIEventList } from '@/lib/API';

async function OKXDetail() {
  const user = await serverUser();
  const eventList = await APIEventList();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <OKXDetailPage eventList={eventList} />
    </Fragment>
  );
}

export default OKXDetail;
