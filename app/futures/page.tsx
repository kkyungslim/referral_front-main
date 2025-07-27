import { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import { APIuserInfo } from '@/lib/API';
import FuturesPage from '@/app/futures/component/FuturesPage';

async function Futures() {
  const user = await APIuserInfo();
  return(
    <Fragment>
      <GlobalNavigation user={user}/>
      <FuturesPage user={user}/>
    </Fragment>
  )
}

export default Futures;