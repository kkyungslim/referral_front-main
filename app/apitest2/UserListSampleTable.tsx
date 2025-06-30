'use client';

import {
  BingXAfUser,
  BingXListResponse,
  BingXResponse,
} from '@/lib/jiwoo_test/types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const UserListSampleTable = ({
  users,
}: {
  users: BingXResponse<BingXListResponse<BingXAfUser>>;
}) => {
  const [open, setOpen] = useState(false);

  function getCurrentBenefitString(currentBenefit: number) {
    switch (currentBenefit) {
      case 0:
        return 'No welfare';
      case 1:
        return 'Fee Cashback';
      case 2:
        return 'Perpetual Fee Discount';
    }
    return '';
  }

  return (
    <div>
      <div className="flex gap-x-1 p-2 items-center">
        <strong>유저 수 : {users.data.total}</strong>
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
                <th className="px-4 py-2 border w-[100px]">UID (user level)</th>
                <th className="px-4 py-2 border w-[60px]">Invite Result</th>
                <th className="px-4 py-2 border w-[60px]">KYC Result</th>
                <th className="px-4 py-2 border w-[100px]">
                  Invite Code & own
                </th>
                <th className="px-4 py-2 border w-[80px]">Registered At</th>
                <th className="px-4 py-2 border w-[80px]">Deposit</th>
                <th className="px-4 py-2 border w-[80px]">Trade</th>
                <th className="px-4 py-2 border w-[80px]">Balance</th>
                <th className="px-4 py-2 border w-[80px]">BR / CR</th>
                <th className="px-4 py-2 border w-[100px]">current benefit</th>
                <th className="px-4 py-2 border w-[100px]">
                  benefit expiration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.data.list.map((user, idx) => (
                <tr key={user.uid} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">
                    {user.uid} ({user.userLevel})
                  </td>
                  <td className="px-4 py-2 border">
                    {user.inviteResult ? '✅' : '❌'} -{' '}
                    {user.directInvitation ? 'Direct' : 'Indirect'}
                  </td>
                  <td className="px-4 py-2 border">
                    {user.kycResult ? '✅' : '❌'}
                  </td>
                  <td className="px-4 py-2 border">
                    {user.inviteCode} / {user.ownInviteCode}
                  </td>
                  <td className="px-4 py-2 border">
                    {new Date(user.registerDateTime).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">
                    {user.deposit ? 'Yes' : 'No'}
                  </td>
                  <td className="px-4 py-2 border">
                    {user.trade ? '✔' : '✖'}
                  </td>
                  <td className="px-4 py-2 border">
                    {user.balanceVolume} USDT
                  </td>
                  <td className="px-4 py-2 border">
                    {user.benefitRatio} % / {user.commissionRatio} %
                  </td>
                  <td className="px-4 py-2 border">
                    {getCurrentBenefitString(user.currentBenefit)}
                  </td>
                  <td className="px-4 py-2 border">
                    {user.benefitExpiration != 0
                      ? new Date(user.benefitExpiration).toLocaleDateString()
                      : 'X'}
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

export default UserListSampleTable;
