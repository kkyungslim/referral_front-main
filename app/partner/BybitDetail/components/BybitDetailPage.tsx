import Image from 'next/image';
import Banner from '@/assets/images/BybitBrandBanner.jpg';
import FeeInfo from '@/app/partner/BybitDetail/components/FeeInfo';
import StickyTab from '@/app/partner/BybitDetail/components/StickyTab';
import Notice from '@/app/partner/BybitDetail/components/Notice';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BestExchanges from '@/app/partner/BybitDetail/components/BestExchanges';
import { DefaultProps } from '@/lib/types';

function BybitDetailPage({ eventList }: DefaultProps) {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className={'relative h-fit md:h-70 overflow-hidden rounded-4xl'}>
            <Image
              src={Banner}
              alt={'Bybit 배너'}
              className={
                'w-full static md:absolute top-0 bottom-0 left-0 right-0 m-auto'
              }
            />
          </div>
        </div>
      </section>
      <FeeInfo />
      <StickyTab eventList={eventList} />
      <BestExchanges />
      <div
        className={
          'container mx-auto mt-10 sticky left-0 bottom-0 z-40 flex items-center justify-center gap-4 border border-primary py-5 px-5 rounded-t-2xl bg-white'
        }
      >
        <p className={'md:text-lg text-sm font-bold text-front2'}>
          아직 Bybit 계정이 없으신가요?
        </p>
        {/* ToDo 거래소 링크로 바로 이동*/}
        <Link target="_blank" href={'https://partner.bybit.com/b/BBLL'}>
          <Button className={'h-fit md:text-md rounded-xl'}>
            네, 만들고 싶어요.
          </Button>
        </Link>
      </div>
      <Notice name="Bybit" />
    </>
  );
}

export default BybitDetailPage;
