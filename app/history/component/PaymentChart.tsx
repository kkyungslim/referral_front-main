import Chart from '@/app/history/component/Chart';
import { UserPaybackInfo } from '@/lib/API';
import { formatNumber } from '@/lib/utils';
import { getMarketIcon } from '@/components/icons/IconUtil';

function PaymentChart({
  paybackInfo,
  marketName,
}: {
  paybackInfo?: UserPaybackInfo;
  marketName: string;
}) {
  if (!paybackInfo) {
    return null;
  }
  console.log(paybackInfo);
  return (
    <section>
      <div className="container mx-auto my-10">
        <div>
          <div className="flex gap-x-2 items-center">
            {/* TODO 현호 디자인 수정해 */}
            <span>{getMarketIcon(marketName, 30, 30)}</span>
            <span className="font-semibold">{marketName}</span>
          </div>
          <p className={'font-semibold text-lg'}>총 페이백 금액</p>
          <p className={'text-primary text-3xl font-bold'}>
            {formatNumber(paybackInfo.totalPayback.toFixed(2))} USDT
          </p>
        </div>
        <div
          className={
            'mt-5 pt-10 pb-3 border-t-3 border-b-3 border-t-primary border-b-primary'
          }
        >
          <Chart paybackInfo={paybackInfo} />
        </div>
        {/* Todo 유저가 페이백 받은 금액을 일 / 주간 / 월간으로 나타내야함 */}
        <div className={'grid grid-cols-3 border-b-3 border-b-primary'}>
          <div className={'text-center py-5'}>
            <p className={'text-front2 font-bold text-xs md:text-base'}>
              일일 페이백
            </p>
            <p className={'text-primary font-bold  md:text-lg text-sm'}>
              {paybackInfo.summary.daily.toFixed(2)} USDT
            </p>
          </div>
          <div className={'text-center py-5'}>
            <p className={'text-front2 font-bold text-xs md:text-base '}>
              주간 페이백
            </p>
            <p className={'text-primary font-bold md:text-lg text-sm'}>
              {paybackInfo.summary.weekly.toFixed(2)} USDT
            </p>
          </div>
          <div className={'text-center py-5'}>
            <p className={'text-front2 font-bold text-xs md:text-base'}>
              월간 페이백
            </p>
            <p className={'text-primary font-bold md:text-lg text-sm'}>
              {paybackInfo.summary.monthly.toFixed(2)} USDT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentChart;
