import { Card } from '@/components/ui/card';
import LogoIcon from '@/components/icons/LogoIcon';

function ContractSeal() {
  return (
    <section>
      <div className="container mx-auto py-16 ">
        <Card className="items-center bg-transparent border-primary border-3 gap-3 rounded-4xl max-w-[400px] w-full mx-auto">
          <div>
            <p
              className={`font-bold text-white text-center text-md md:text-lg`}
            >
              주요 파트너사들과 <span>공식 계약</span>을 체결한 곳은
              <br />
              <span className={`md:text-xl text-lg`}>
                오직, <span className={`text-xl md:text-2xl`}>테더베이스</span>{' '}
                뿐입니다.
              </span>
            </p>
          </div>
          <LogoIcon width={80} height={80} />
        </Card>
      </div>
    </section>
  );
}

export default ContractSeal;
