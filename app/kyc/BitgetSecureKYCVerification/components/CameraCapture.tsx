import { Card } from '@/components/ui/card';
import Image from 'next/image';
import BitgetCameraAuthentication01 from '@/assets/images/BitgetCameraAuthentication01.jpg';
import BitgetCameraAuthentication02 from '@/assets/images/BitgetCameraAuthentication02.jpg';
import BitgetCameraAuthentication03 from '@/assets/images/BitgetCameraAuthentication03.jpg';

function CameraCapture() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 얼굴 인증 시작
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BitgetCameraAuthentication01} alt={'1. 얼굴 인증 시작'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          신분증 인증에 이어서
          <br />
          &apos;Continue&apos;버튼을 클릭합니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 얼굴 인증 진행중
        </h4>
        <div className={'flex justify-center'}>
          <Image
            src={BitgetCameraAuthentication02}
            alt={'2. 얼굴 인증 진행중'}
          />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            원형 프레임에 맞춰 얼굴을 360도 천천히 돌리면,
            <br />
            자동으로 로딩이 되며, 완료됩니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          3. 얼굴 인증 완료
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BitgetCameraAuthentication03} alt={'3. 얼굴 인증 완료'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          최종적으로 KYC 인증 신청이 완료되었습니다.
        </p>
      </Card>
    </div>
  );
}

export default CameraCapture;
