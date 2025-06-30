import { Card } from '@/components/ui/card';
import Image from 'next/image';
import BingXCameraAuthentication01 from '@/assets/images/BingXCameraAuthentication01.jpg';
import BingXCameraAuthentication02 from '@/assets/images/BingXCameraAuthentication02.jpg';

function CameraCapture() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 얼굴 인증 시작
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BingXCameraAuthentication01} alt={'1. 얼굴 인증 시작'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          프레임에 맞춰 얼굴을 넣으면 자동으로 로딩이 되며,
          <br />
          얼굴 인증이 완료됩니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 얼굴 인증 완료
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BingXCameraAuthentication02} alt={'2. 얼굴 인증 완료'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            최종적으로 KYC 인증 신청이 완료되었으며,
            <br />
            심사 통과는 평균 1시간 이내 소요됩니다.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default CameraCapture;
