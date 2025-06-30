import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import React, { Fragment } from 'react';
import WithdrawPage from '@/app/withdraw/components/WithdrawPage';
import { APIuserMarketInfo } from "@/lib/API";
import { redirect } from "next/navigation";

async function Withdraw({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const user = await serverUser();
  const userSpecificMarketInfo = await APIuserMarketInfo();
  const { mk } = await searchParams;
  if (!mk) {
    // Market Name 없으면 Redirect
    redirect('/');
  }
  
  if (!userSpecificMarketInfo) {
    redirect('/');
  }
  
  const targetMarket = userSpecificMarketInfo.find((market) => market.marketName === mk);
  
  if (!targetMarket) {
    redirect('/');
  }

  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <WithdrawPage targetMarket={targetMarket!} />
    </Fragment>
  );
}

export default Withdraw;
