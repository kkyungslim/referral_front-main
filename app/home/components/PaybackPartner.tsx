import Link from 'next/link';
import PartnerTab from '@/components/PartnerTab';
import { DefaultProps } from "@/lib/types";

function PaybackPartner({ eventList }: DefaultProps) {
  
  return (
    <section>
      <div className="container mx-auto mt-20 mb-20">
        <div className="flex justify-between items-center md:items-end mb-5">
          <h2 className={'text-lg md:text-2xl'}>
            <span className="text-primary">페이백</span> 가능한 거래소
          </h2>
          <Link href={'/partner'} className="text-front2 text-base">
            둘러보기 &gt;
          </Link>
        </div>
        <PartnerTab eventList={eventList} />
      </div>
    </section>
  );
}

export default PaybackPartner;
