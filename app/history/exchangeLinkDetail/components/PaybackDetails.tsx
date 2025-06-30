'use client';
import Calendar from '@/components/Calendar';
import {
  CommissionHistory,
  UserCalenderData,
  WithdrawRequest,
} from '@/lib/API';
import { useEffect, useState } from "react";
import { getMarketIcon } from "@/components/icons/IconUtil";

function PaybackDetails({
  paybackDetail,
  marketUuid,
}: {
  paybackDetail?: UserCalenderData;
  marketUuid: string;
}) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [withdraws, setWithdraws] = useState<WithdrawRequest[]>([]);
  const [commissions, setCommissions] = useState<CommissionHistory[]>([]);
  const [events, setEvents] = useState<{ title: string; date: string }[]>([]);

  function formatDatetime(datetime: string) {
    if (datetime.indexOf('T') === -1) return datetime;
    return datetime.split('T')[0];
  }

  function paybackDataToEvents() {
    if (paybackDetail === undefined)
      return [{ title: '+20', date: '2025-05-13' }];
    const withdraws = paybackDetail.withdrawRequests.map((request) => {
      const title = '-' + request.amount;
      return {
        title: title,
        date: formatDatetime(request.regDatetime),
      };
    });

    const commissions = paybackDetail.commissionHistories.map((history) => {
      const title = '+' + history.reward;
      return {
        title: title,
        date: formatDatetime(history.regDatetime),
      };
    });

    return [...withdraws, ...commissions];
  }

  useEffect(() => {
    if (paybackDetail) {
      //
      setEvents(paybackDataToEvents());

      const monthString =
        selectedDate.getMonth() + 1 > 10
          ? selectedDate.getMonth() + 1
          : '0' + (selectedDate.getMonth() + 1);
      const dayString =
        selectedDate.getDate() >= 10
          ? selectedDate.getDate()
          : '0' + selectedDate.getDate();
      const resultStr = `${selectedDate.getFullYear()}-${monthString}-${dayString}`;
      const withdraws = paybackDetail.withdrawRequests.filter((request) => {
        return formatDatetime(request.regDatetime) === resultStr;
      });
      const commissions = paybackDetail.commissionHistories.filter(
        (history) => {
          return formatDatetime(history.regDatetime) === resultStr;
        },
      );
      setWithdraws(withdraws);
      setCommissions(commissions);
    }
  }, [selectedDate, paybackDetail]);

  function dateToKor() {
    const monthString =
      selectedDate.getMonth() + 1 > 10
        ? selectedDate.getMonth() + 1
        : '0' + (selectedDate.getMonth() + 1);
    const dayString =
      selectedDate.getDate() >= 10
        ? selectedDate.getDate()
        : '0' + selectedDate.getDate();
    return `${selectedDate.getFullYear()}년 ${monthString}월 ${dayString}일`;
  }

  function getStatusString(status: string) {
    switch (status) {
      case 'PENDING':
        return '요청됨';
      case 'CONFIRMED':
        return '완료됨';
      case 'REJECTED':
        return '거절됨';
      case 'CANCELED':
        return '취소됨';
    }
    return status;
  }

  return (
    <div className={'py-10'}>
      <Calendar
        calenderData={paybackDetail}
        setSelectedDate={setSelectedDate}
        events={events}
      />
      <div className={'mt-5'}>
        <p className={'text-lg font-bold mb-3'}>{dateToKor()}</p>
        <ul>
          {withdraws.map((withdraw, index) => {
            return (
              <li
                key={`api-withdraw-${index}`}
                className={'flex items-center justify-between py-2'}
              >
                <div className={'flex items-center gap-3'}>
                  {/*<BybitBoxIcon width={30} height={30} />*/}
                  <p className={'text-xs md:text-base font-semibold'}>
                    {getMarketIcon(withdraw.marketName, 30, 30)}
                  </p>
                  <p className={'text-xs md:text-base font-semibold'}>
                    UID {marketUuid}
                  </p>
                  <p className={'text-xs md:text-base font-semibold text-gray-400'}>
                    {getStatusString(withdraw.status)}
                  </p>
                </div>
                <div>
                  <p
                    className={
                      'font-semibold text-primary md:text-base text-sm'
                    }
                  >
                    - {withdraw.amount} USDT (출금)
                  </p>
                </div>
              </li>
            );
          })}
          {commissions.map((commission, index) => {
            return (
              <li
                key={`api-commission-${index}`}
                className={'flex items-center justify-between py-2'}
              >
                <div className={'flex items-center gap-3'}>
                  <p className={'text-xs md:text-base font-semibold'}>
                    {getMarketIcon(commission.marketName, 30, 30)}
                  </p>
                  <p className={'text-xs md:text-base font-semibold'}>
                    UID {marketUuid}
                  </p>
                </div>
                <div>
                  <p className={'font-semibold text-set md:text-base text-sm'}>
                    + {commission.reward} USDT (거래수수료)
                  </p>
                </div>
              </li>
            );
          })}
          {commissions.length === 0 && withdraws.length === 0 && (
            <p className={'text-center text-sm'}>거래 내역이 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default PaybackDetails;
