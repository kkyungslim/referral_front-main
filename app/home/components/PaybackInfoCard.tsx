import { Card } from '@/components/ui/card';
import Image from 'next/image';
import moneyBg from '@/assets/images/moneyBg.png';
import NumberCounter from '@/components/NumberCounter';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function PaybackInfoCard() {
  return (
    <section>
      <div className="container mx-auto mt-20">
        <Card
          className={`border-none bg-bg1 md:gap-70 gap-30 relative shadow-xl`}
        >
          <Image
            src={moneyBg}
            alt="moneyBg"
            className="absolute right-6 top-6 md:w-100 w-60"
            width={421}
            height={347}
          />
          <h2 className={'relative z-[2] md:text-[60px] text-[30px]'}>
            1분 만에
            <br />
            확인해 보세요!
          </h2>
          <div className={'relative z-[2]'}>
            <p className="text-lg md:text-xl font-bold mb-3">
              한 달 평균 페이백{' '}
              <NumberCounter number={497500} duration={1500}></NumberCounter>
            </p>
            <Link href={'/payback'}>
              <Button className="w-full py-6 text-md">
                내 거래 수수료 환급받기
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default PaybackInfoCard;
