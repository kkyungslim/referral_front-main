import { Card } from '@/components/ui/card';
import Image from 'next/image';
import GateioComplete01 from '@/assets/images/GateioComplete01.jpg';
import GateioComplete02 from '@/assets/images/GateioComplete02.jpg';
import GateioComplete03 from '@/assets/images/GateioComplete03.jpg';
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
          <Image src={GateioComplete01} alt={'1. 마이 프로필 진입'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          앱 좌측 상단 프로필 아이콘을 눌러,
          <br />
          프로필 메뉴로 이동합니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>2. KYC 인증 완료</h4>
        <div className={'flex justify-center'}>
          <Image src={GateioComplete02} alt={'2. KYC 인증 완료'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            계정명 하단에 있는
            <br />
            &apos;Verified&apos; 버튼을 클릭합니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          3. KYC 인증 완료 상세
        </h4>
        <div className={'flex justify-center'}>
          <Image src={GateioComplete03} alt={'3. KYC 인증 완료 상세'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            해당 페이지에서 신원인증에 사용한
            <br />
            이름과 신분증 번호를 볼 수 있고,
            <br />
            &apos;Identity Verification&apos;이 인증되었음을
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
