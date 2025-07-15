import { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import { APIuserInfo } from '@/lib/API';
import InvitePage from '@/app/invite/component/InvitePage';

async function Invite() {
  const user = await APIuserInfo();
  return(
    <Fragment>
      <GlobalNavigation user={user}/>
      <InvitePage/>
    </Fragment>
  )
}

export default Invite;