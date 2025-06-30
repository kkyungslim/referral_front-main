import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import PaybackOverview from '@/app/history/exchangeLinkDetail/components/PaybackOverview';
import { User } from '@/lib/types';
import { getMarketIcon } from '@/components/icons/IconUtil';

function ExchangeLinkDetailPage({
  user,
  marketName,
  marketUuid,
  year,
  month,
}: {
  user?: User;
  marketName: string;
  marketUuid: string;
  year: string;
  month: string;
}) {
  if (!user) {
    return null;
  }
  return (
    <div>
      <section>
        <div className="container mx-auto my-10">
          <div className="flex items-center gap-5 ">
            {getMarketIcon(marketName, 50, 50)}
            <div>
              <p className={'text-primary font-bold text-lg'}>{user.email}</p>
              <div className={'flex items-center gap-2'}>
                <div
                  className={
                    'border text-xs border-front2 text-front2 rounded-sm px-2'
                  }
                >
                  <span>UID</span>
                </div>
                <p className={'text-sm'}>{marketUuid}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PaybackOverview
        user={user}
        marketName={marketName}
        marketUuid={marketUuid}
        year={year}
        month={month}
      />
    </div>
  );
}

export default ExchangeLinkDetailPage;
