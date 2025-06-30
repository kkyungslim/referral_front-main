import { Card } from '@/components/ui/card';
import Image from 'next/image';
import BitgetComplete01 from '@/assets/images/BitgetComplete01.jpg';
import BitgetComplete02 from '@/assets/images/BitgetComplete02.jpg';
import BitgetComplete03 from '@/assets/images/BitgetComplete03.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function VerificationCompletion() {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>1. KYC 인증 대기</h4>
        <div className={'flex justify-center'}>
          <Image src={BitgetComplete01} alt={'1. KYC 인증 대기'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          KYC 인증 심사는 평균 1시간 정도 소요되며,
          <br />앱 알림 또는 이메일로 통보됩니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 마이 프로필 진입
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BitgetComplete02} alt={'2. 마이 프로필 진입'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            앱 좌측 상단의 프로필 아이콘을 클릭해
            <br />
            &apos;Identity verification&apos;으로 들어갑니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>3. KYC 인증 완료</h4>
        <div className={'flex justify-center'}>
          <Image src={BitgetComplete03} alt={'3. KYC 인증 완료'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            Identity Verification의 상태가
            <br />
            &apos;Verified&apos;로 바뀐 것을 확인할 수 있습니다.
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
