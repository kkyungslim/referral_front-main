import React, { Fragment } from 'react';
import GlobalNavigation from '@/components/GlobalNavigation';
import { serverUser } from '@/lib/server/ServerUtils';
import HistoryPage from '@/app/history/component/HistoryPage';
import { redirect } from "next/navigation";
import { APIuserMarketInfo } from "@/lib/API";

// 거래소별 페이백 히스토리
async function History({
  searchParams,
}: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const user = await serverUser();
  const userSpecificMarketInfo = await APIuserMarketInfo();
  const { mk, y, m } = await searchParams;
  console.log(mk, y, m);
  
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
  
  let resultY = y as string;
  let resultM = m as string;
  
  const now = new Date();
  
  if (!y) {
    resultY = now.getFullYear().toString();
  }
  
  if (!m) {
    resultM = (now.getMonth() + 1).toString();
  }
  
  return (
    <Fragment>
      <GlobalNavigation user={user}></GlobalNavigation>
      <HistoryPage marketName={mk as string} marketUuid={targetMarket.uid} year={resultY} month={resultM}/>
    </Fragment>
  );
}

export default History;
