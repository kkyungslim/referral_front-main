import React, { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import HomePage from './home/components/HomePage';
import { APIEventList, APIuserMarketInfo } from '@/lib/API';

async function Home() {
  const user = await serverUser();
  const userSpecificMarketInfo = await APIuserMarketInfo();
  const userMarketInfo = await APIuserMarketInfo();
  const eventList = await APIEventList();
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <HomePage
        user={user}
        uid={userSpecificMarketInfo}
        userMarketInfo={userMarketInfo}
        eventList={eventList}
      ></HomePage>
    </Fragment>
  );
}

export default Home;
