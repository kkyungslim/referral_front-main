import GlobalNavigation from '@/components/GlobalNavigation';
import { ObjectViewer } from '@/components/ObjectViewer';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import { BingXTest } from '@/lib/jiwoo_test/TEST_API';
import UserListSampleTable from "@/app/apitest2/UserListSampleTable";
import DailyCommission from "@/app/apitest2/DailyCommission";
import FileUploader from "@/app/apitest2/FileUploader";

async function ApiTestPage() {
  const timers: any = {};

  timers.userStart = performance.now();
  const user = await serverUser();
  timers.userElapsed = performance.now() - timers.userStart;

  timers.userMarketInfoStart = performance.now();
  const bingXData = await BingXTest();
  timers.userMarketInfoElapsed = performance.now() - timers.userMarketInfoStart;

  const elapseds = Object.entries(timers).reduce(
    (acc: any, [key, value]) => {
      if (key.endsWith('Elapsed')) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, number>,
  );
  console.log('Elapsed : ', elapseds);
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <section className="w-full px-3 py-1 m-auto flex flex-col gap-4">
        <article>
          API 소요시간
          {Object.entries(elapseds).map(([key, value]: any) => {
            return (
              <div key={key}>
                {key}: {value.toFixed(2)}ms
              </div>
            );
          })}
        </article>
        <article className="border border-black rounded p-1">
          <h4>BingX raw API</h4>
          {bingXData && (
            <>
              <div>
                <h5>Users</h5>
                <UserListSampleTable users={bingXData.users}></UserListSampleTable>
              </div>
              <div>
                <h5>Daily Commissions</h5>
                <DailyCommission commissions={bingXData.dailyCommission}></DailyCommission>
              </div>
            </>
          )}
        </article>
        {/*<article>*/}
        {/*  <h4>File Upload API</h4>*/}
        {/*  <div>*/}
        {/*    /!*<FileUploader/>*!/*/}
        {/*  </div>*/}
        {/*</article>*/}
        <article className="border border-black rounded p-1">
          <h4>BingX server API</h4>
          
        </article>
      </section>
    </Fragment>
  );
}

export default ApiTestPage;
