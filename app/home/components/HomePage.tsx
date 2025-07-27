'use client';
import UIDsearch from '@/app/home/components/UIDsearch';
import HostEvent from '@/app/home/components/HostEvent';
import PartnerEvent from '@/app/home/components/PartnerEvent';
import PaybackPartner from '@/app/home/components/PaybackPartner';
import { DefaultProps } from '@/lib/types';
import HomeBanner from '@/app/home/components/HomeBanner';
import PaybackInfoCard from '@/app/home/components/PaybackInfoCard';
import AuthenticatedView from '@/app/home/components/AuthenticatedView';
import PopUp from '@/app/home/components/PopUp';

function HomePage({ user, uid, userMarketInfo, eventList }: DefaultProps) {
  return (
    <div>
      <PopUp/>
      {!user ? (
        <UIDsearch />
      ) : uid && uid.length > 0 ? (
        <AuthenticatedView userMarketInfo={userMarketInfo} />
      ) : (
        <HomeBanner />
      )}
      {/* AuthenticatedView: 로그인/UID연동 했을때 보여야함 */}
      <HostEvent />
      <PaybackInfoCard />
      <PartnerEvent eventList={eventList} />
      <PaybackPartner eventList={eventList}/>
    </div>
  );
}

export default HomePage;
