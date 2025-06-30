'use client';

import {
  BingXAfUser, BingXDailyCommission,
  BingXListResponse,
  BingXResponse,
} from "@/lib/jiwoo_test/types";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const DailyCommission = ({
  commissions,
}: {
  commissions: BingXResponse<BingXListResponse<BingXDailyCommission>>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-x-1 p-2 items-center">
        <strong>일일 커미션 수 : {commissions.data.total}</strong>
        <span className="text-gray-500">기준: 오늘</span>
        <Button
          onClick={() => {
            setOpen((pre) => !pre);
          }}
          variant={'outline'}
          className="rounded-lg text-base"
        >
          {open ? '접기' : '보기'}
        </Button>
      </div>
      {open && (
        <div className="overflow-y-auto max-h-[600px] border border-gray-300 rounded-lg shadow-sm">
          <table className="min-w-full table-fixed text-sm text-left">
            <thead className="sticky top-0 z-10 bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2 border w-[20px]">번호</th>
                <th className="px-4 py-2 border w-[100px]">UID</th>
                <th className="px-4 py-2 border w-[60px]">
                  commissionTime (거래 일자)
                </th>
                <th className="px-4 py-2 border w-[60px]">
                  tradingVolume (전체 거래 금액)
                </th>
                <th className="px-4 py-2 border w-[100px]">
                  commissionVolume (커미션 금액)
                </th>
                <th className="px-4 py-2 border w-[100px]">
                  commission Ratio (커미션 비율)
                </th>
                <th className="px-4 py-2 border w-[80px]">
                  spotTradingVolume (Spot 거래 금액)
                </th>
                <th className="px-4 py-2 border w-[80px]">
                  swapTradingVolume (swap 거래 금액)
                </th>
                <th className="px-4 py-2 border w-[80px]">
                  stdTradingVolume (std 거래 금액)
                </th>
                <th className="px-4 py-2 border w-[80px]">
                  extCopyTradingVolume (ext Copy 거래 금액)
                </th>
                <th className="px-4 py-2 border w-[80px]">
                  mt5TradingVolume (mt5 거래 금액)
                </th>
                <th className="px-4 py-2 border w-[100px]">
                  spotCommissionVolume
                </th>
                <th className="px-4 py-2 border w-[100px]">
                  swapCommissionVolume
                </th>
                <th className="px-4 py-2 border w-[100px]">
                  stdCommissionVolume
                </th>
                <th className="px-4 py-2 border w-[100px]">
                  extCopyCommissionVolume
                </th>
                <th className="px-4 py-2 border w-[100px]">
                  mt5CommissionVolume
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commissions.data.list.map((commission, idx) => (
                <tr key={commission.uid} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">{commission.uid}</td>
                  <td className="px-4 py-2 border">
                    {new Date(commission.commissionTime).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.tradingVolume} USDT
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.commissionVolume} USDT
                  </td>
                  <td className="px-4 py-2 border">
                    {Number(commission.commissionVolume) > 0 ? Number(commission.commissionVolume)  / Number(commission.tradingVolume) * 100 : 0} %
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.spotTradingVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.swapTradingVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.stdTradingVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.extCopyTradingVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.mt5TradingVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.spotCommissionVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.swapCommissionVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.stdCommissionVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.extCopyCommissionVolume}
                  </td>
                  <td className="px-4 py-2 border">
                    {commission.mt5CommissionVolume}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DailyCommission;
