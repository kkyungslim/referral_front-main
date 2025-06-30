import GlobalNavigation from '@/components/GlobalNavigation';
import { ObjectViewer } from '@/components/ObjectViewer';
import { APIEventList, APImarketList, APIuserMarketInfo } from '@/lib/API';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import UIDSearchApiTest from './UIDSearchApiTest';

async function ApiTestPage() {
  const timers: any = {};

  timers.userStart = performance.now();
  const user = await serverUser();
  timers.userElapsed = performance.now() - timers.userStart;

  timers.userMarketInfoStart = performance.now();
  const userSpecificMarketInfo = await APIuserMarketInfo();
  timers.userMarketInfoElapsed = performance.now() - timers.userMarketInfoStart;

  timers.marketListStart = performance.now();
  const marketList = await APImarketList();
  timers.marketListElapsed = performance.now() - timers.marketListStart;

  timers.eventListStart = performance.now();
  const eventList = await APIEventList();
  timers.eventListElapsed = performance.now() - timers.eventListStart;

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
      <section className="w-full max-w-80 m-auto flex flex-col gap-4">
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
        <article>
          <h4>User</h4>
          {user ? <ObjectViewer data={user}></ObjectViewer> : '유저없음'}
        </article>
        <article>
          <h4>User Market Info</h4>
          {userSpecificMarketInfo && (
            <ObjectViewer data={userSpecificMarketInfo}></ObjectViewer>
          )}
        </article>
        <article>
          <h4>Market List </h4>
          {marketList && <ObjectViewer data={marketList}></ObjectViewer>}
        </article>

        <article>
          {marketList ? (
            <UIDSearchApiTest marketList={marketList}></UIDSearchApiTest>
          ) : (
            '거래소 리스트가 없습니다.'
          )}
        </article>

        <article>
          <h4>Event List</h4>
          {eventList && <ObjectViewer data={eventList}></ObjectViewer>}
        </article>
      </section>
    </Fragment>
  );
}

export default ApiTestPage;
