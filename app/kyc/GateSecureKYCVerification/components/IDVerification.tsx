import { Card } from '@/components/ui/card';
import Image from 'next/image';
import IDVerification01 from '@/assets/images/IDVerification01.jpg';
import GateioIDVerification02 from '@/assets/images/GateioIDVerification02.jpg';
import GateioIDVerification03 from '@/assets/images/GateioIDVerification03.jpg';

function IDVerification() {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 사용할 신분증 선택
        </h4>
        <div className={'flex justify-center'}>
          <Image src={IDVerification01} alt={'1. 사용할 신분증 선택'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          기존에 사용한 신분증은 새로운 계정을 만들 때<br />
          사용할 수 없습니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 카메라 촬영 권한 수락
        </h4>
        <div className={'flex justify-center'}>
          <Image
            src={GateioIDVerification03}
            alt={'2. 카메라 촬영 권한 수락'}
          />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            촬영 권한을 수락하기 위해
            <br />
            &apos;Allow while visiting the site&apos; 버튼을 클릭합니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          3. 신분증 인증 시작
        </h4>
        <div className={'flex justify-center'}>
          <Image src={GateioIDVerification02} alt={'3. 신분증 인증 시작'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          선택한 신분증의 앞면과 뒷면을 차례대로 촬영합니다.
          <br />
          단, 다음 세가지의 경우엔 심사가 거절될 수 있으니, 참고바랍니다.
          <br />
          <br />
          1. 신분증이 짤림
          <br />
          2. 사진이 흔들림
          <br />
          3. 빛 번짐
        </p>
      </Card>
    </div>
  );
}

export default IDVerification;
