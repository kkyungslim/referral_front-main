import PaymentChart from '@/app/history/component/PaymentChart';
import { Card } from '@/components/ui/card';
import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import { APIGetPaybackDetail, APIPaybackInfo } from '@/lib/API';
import PaybackDetails from '@/app/history/exchangeLinkDetail/components/PaybackDetails';
import { formatNumber } from '@/lib/utils';

async function HistoryPage({
  marketName,
  marketUuid,
  year,
  month,
}: {
  marketName: string;
  marketUuid: string;
  year: string;
  month: string;
}) {
  const paybackInfo = await APIPaybackInfo(marketName);
  const paybackDetail = await APIGetPaybackDetail(marketName, year, month);
  return (
    <div>
      <PaymentChart paybackInfo={paybackInfo} marketName={marketName} />
      <section>
        <div className="container mx-auto mb-10">
          <div className={'mb-10'}>
            <h3 className={'mb-5'}>페이백 내역</h3>
            <PaybackDetails
              paybackDetail={paybackDetail}
              marketUuid={marketUuid}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HistoryPage;
