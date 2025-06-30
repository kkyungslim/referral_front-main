import { Card } from '@/components/ui/card';
import Image from 'next/image';
import OKXCameraAuthentication01 from '@/assets/images/OKXCameraAuthentication01.jpg';
import OKXCameraAuthentication02 from '@/assets/images/OKXCameraAuthentication02.jpg';
import OKXCameraAuthentication03 from '@/assets/images/OKXCameraAuthentication03.jpg';

function CameraCapture() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 얼굴 인증 시작
        </h4>
        <div className={'flex justify-center'}>
          <Image src={OKXCameraAuthentication01} alt={'1. 얼굴 인증 시작'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          주의 사항을 확인하고 얼굴 인증이 시작됩니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 얼굴 인증 진행
        </h4>
        <div className={'flex justify-center'}>
          <Image src={OKXCameraAuthentication02} alt={'2. 얼굴 인증 진행'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            프레임에 맞춰 얼굴을 넣으면 자동으로 로딩이 되며,
            <br />
            얼굴 인증이 완료됩니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          3. 얼굴 인증 완료
        </h4>
        <div className={'flex justify-center'}>
          <Image src={OKXCameraAuthentication03} alt={'2. 얼굴 인증 완료'} />
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
