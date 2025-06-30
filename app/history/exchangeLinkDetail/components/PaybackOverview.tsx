import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PaybackTab from '@/app/history/exchangeLinkDetail/components/PaybackTab';
import PaybackDetails from '@/app/history/exchangeLinkDetail/components/PaybackDetails';
import { User } from "@/lib/types";
import { APIGetPaybackDetail } from "@/lib/API";

async function PaybackOverview({ user, marketName, marketUuid, year, month }: { user?: User, marketName: string, marketUuid: string, year: string, month: string }) {
  const paybackDetail = await APIGetPaybackDetail(marketName, year, month);
  
  return (
    <section>
      <div className="container mx-auto mb-10">
        <Card className={'p-3 border-2 shadow-none'}>
          <Tabs defaultValue="account">
            <TabsList
              className={
                'w-full bg-transparent p-0 border-b-3 border-b-front3 rounded-none'
              }
            >
              <TabsTrigger
                value="account"
                className={
                  'text-lg font-bold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary border-b-3  rounded-none mx-0 px-0 mb-[-6px]'
                }
              >
                페이백
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className={
                  'text-lg font-bold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary border-b-3  rounded-none mx-0 px-0 mb-[-6px]'
                }
              >
                페이백 내역
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <PaybackTab marketName={marketName} />
            </TabsContent>
            <TabsContent value="password">
              <PaybackDetails paybackDetail={paybackDetail} marketUuid={marketUuid} />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}

export default PaybackOverview;
