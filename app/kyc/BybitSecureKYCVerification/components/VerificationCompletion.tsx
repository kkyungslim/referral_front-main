import { Card } from '@/components/ui/card';
import Image from 'next/image';
import BybitComplete01 from '@/assets/images/BybitComplete01.jpg';
import BybitComplete02 from '@/assets/images/BybitComplete02.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function VerificationCompletion() {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 마이 프로필 진입
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BybitComplete01} alt={'1. 마이 프로필 진입'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          앱 좌측 상단의 사람 얼굴 모양의 버튼을 클릭합니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>2. KYC 인증 완료</h4>
        <div className={'flex justify-center'}>
          <Image src={BybitComplete02} alt={'2. KYC 인증 완료'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            인증이 완료되면 &apos;Verified ID&apos;로 바뀐 것을
            <br />
            확인할 수 있습니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-center font-bold'}>
          이제 거래를 하면서
          <br />
          <span className={'text-primary'}>테더베이스 혜택</span>을 받을 수
          있어요!
        </h4>
        <Link href={'/partner'} className={'w-fit mx-auto'}>
          <Button className={'text-lg py-7 px-4'}>목록으로 돌아가기</Button>
        </Link>
      </Card>
    </div>
  );
}

export default VerificationCompletion;
