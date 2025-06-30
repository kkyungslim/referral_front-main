import { Card } from '@/components/ui/card';
import Image from 'next/image';
import IDVerification01 from '@/assets/images/IDVerification01.jpg';
import BybitIDVerification02 from '@/assets/images/BybitIDVerification02.jpg';
import BybitIDVerification03 from '@/assets/images/BybitIDVerification03.jpg';
import BybitIDVerification04 from '@/assets/images/BybitIDVerification04.jpg';
import Link from 'next/link';

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
          2. 국가 및 신분증 선택
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BybitIDVerification02} alt={'2. 국가 및 신분증 선택'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            국가와 사용할 신분증의 종류를 선택하고,
            <br />
            &apos;Confirm&apos;을 클릭합니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          3. 신분증 인증 시작
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BybitIDVerification03} alt={'3. 신분증 인증 시작'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          하단의 &apos;Continue&apos; 버튼을 클릭하여 다음 단계로 넘어갑니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          4. 신분증 인증 주의사항
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BybitIDVerification04} alt={'4. 신분증 인증 주의사항'} />
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
