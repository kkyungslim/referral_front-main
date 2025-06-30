import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import PartnerPage from './PartnerPage';
import { APIEventList, APIGetBanner } from '@/lib/API';

async function Parnter() {
  const user = await serverUser();
  const eventList = await APIEventList();
  const bannerList = await APIGetBanner('ASSOCIATED');

  console.log(bannerList);
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <PartnerPage eventList={eventList} bannerList={bannerList}></PartnerPage>
    </Fragment>
  );
}

export default Parnter;
