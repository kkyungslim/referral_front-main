import { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import EventPage from '@/app/event/component/EventPage';
import { APIEventList, APIGetBanner } from '@/lib/API';

async function Event() {
  const user = await serverUser();
  const eventList = await APIEventList();
  const bannerList = await APIGetBanner('EVENT');
  return (
    <Fragment>
      <GlobalNavigation user={user} />
      <EventPage eventList={eventList} bannerList={bannerList} />
    </Fragment>
  );
}

export default Event;
