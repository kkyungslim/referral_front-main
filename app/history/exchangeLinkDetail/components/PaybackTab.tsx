import Money from '@/components/icons/Money';
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon';
import { APIPaybackInfo } from "@/lib/API";

async function PaybackTab({marketName}: {marketName: string}) {
  const paybackInfo = await APIPaybackInfo(marketName);
  
  const today = new Date();
  const month = today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1);
  const day = today.getDate() > 9 ? today.getDate() : '0' + today.getDate();
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const tomorrowMonth = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : '0' + (tomorrow.getMonth() + 1);
  const tomorrowDay = tomorrow.getDate() > 9 ? tomorrow.getDate() : '0' + tomorrow.getDate();
  
  return (
    <>
      <div className={'text-center my-5'}>
        <p className={'font-semibold'}>총 페이백 금액</p>
        <h3 className={'text-primary font-bold'}>
          {paybackInfo ? paybackInfo.totalPayback.toFixed(2) : 0} USDT
        </h3>
      </div>
      <div className={'w-fit mx-auto bg-bg1 py-1 px-5 rounded-2xl'}>
        <p className={'font-semibold text-xs md:text-sm'}>
          TIP. 출금은 페이백{' '}
          <span className={'text-primary'}>50 USDT 이상</span>부터 가능합니다.
        </p>
      </div>
      <div
        className={
          'flex items-center justify-between border-t-2 border-b-2 p-5 my-10'
        }
      >
        <span className={'text-lg font-semibold text-front2'}>누적 페이백</span>
        <div className={'flex items-center gap-2'}>
          <Money width={25} height={25} />
          <span className={'text-primary text-lg font-bold'}>
            {paybackInfo ? paybackInfo.totalPayback.toFixed(2) : 0} USDT
          </span>
        </div>
      </div>
      <div>
        <div className={'px-5'}>
          <span className={'text-lg font-semibold text-front2'}>
            거래소 설명
          </span>
        </div>
        <div
          className={
            'w-fit flex flex-col md:flex-row items-center mx-auto gap-5 my-5'
          }
        >
          <div className={'flex flex-col items-center'}>
            <p>거래소 페이백 발생</p>
            <div
              className={
                'flex items-center border-primary border px-3 py-1 rounded-md gap-2'
              }
            >
              <span className={'font-bold text-2xl'}>{day}일</span>
              <div className={'flex items-center gap-2'}>
                <span
                  className={
                    'inline-block w-[3px] h-[3px] bg-front2 rounded-2xl'
                  }
                ></span>
                <span
                  className={
                    'inline-block w-[3px] h-[3px] bg-front2 rounded-2xl'
                  }
                ></span>
                <span
                  className={
                    'inline-block w-[3px] h-[3px] bg-front2 rounded-2xl'
                  }
                ></span>
              </div>
              <span className={'font-bold text-2xl'}>{tomorrowDay}일</span>
            </div>
          </div>
          <ArrowBottomIcon
            width={15}
            height={15}
            className={' md:rotate-270'}
          />
          <div className={'flex flex-col items-center ml-2'}>
            <p>페이백 업데이트</p>
            <div
              className={
                'flex w-full justify-center items-center border-primary border px-3 py-1 rounded-md gap-2 bg-primary'
              }
            >
              <span className={'font-bold text-2xl text-white'}>
                {tomorrowDay}일
              </span>
            </div>
          </div>
        </div>
        <p className={'text-center font-semibold mb-5 md:block hidden'}>
          <span className={'text-primary'}>
            {month}월 {day}일 20:00(KST)부터 {tomorrowMonth}월 {tomorrowDay}일
            20:00(KST)까지{' '}
          </span>
          <br />
          거래소에서 발생한 페이백 내역은{' '}
          <span className={'text-primary'}>
            {tomorrowMonth}월 {tomorrowDay}일 20:00 (KST)
          </span>{' '}
          에 업데이트 됩니다.
        </p>
        <p
          className={
            'text-center font-semibold mb-5 md:text-base text-sm block md:hidden'
          }
        >
          <span className={'text-primary'}>
            {month}월 {day}일 20:00(KST)부터 {tomorrowMonth}월 {tomorrowDay}일
            20:00(KST)까지{' '}
          </span>
          <br />
          거래소에서 발생한 페이백 내역은{' '}
          <span className={'text-primary'}>
            {tomorrowMonth}월 {tomorrowDay}일 20:00 (KST)
          </span>{' '}
          에 업데이트 됩니다.
        </p>
      </div>
    </>
  );
}

export default PaybackTab;
