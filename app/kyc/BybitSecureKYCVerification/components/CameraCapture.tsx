import { Card } from '@/components/ui/card';
import Image from 'next/image';
import BybitCameraAuthentication01 from '@/assets/images/BybitCameraAuthentication01.jpg';
import BybitCameraAuthentication02 from '@/assets/images/BybitCameraAuthentication02.jpg';
import BybitCameraAuthentication03 from '@/assets/images/BybitCameraAuthentication03.jpg';

function CameraCapture() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 얼굴 인증 시작
        </h4>
        <div className={'flex justify-center'}>
          <div className={'border pt-2'}>
            <Image
              src={BybitCameraAuthentication01}
              alt={'1. 얼굴 인증 시작'}
            />
          </div>
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          신분증 인증에 이어서 5초 정도
          <br />
          얼굴을 화면에 맞추고 응시해주세요.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 얼굴 인증 진행중
        </h4>
        <div className={'flex justify-center'}>
          <Image
            src={BybitCameraAuthentication02}
            alt={'2. 얼굴 인증 진행중'}
          />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            자동으로 로딩이 됩니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          3. 얼굴 인증 완료
        </h4>
        <div className={'flex justify-center'}>
          <Image src={BybitCameraAuthentication03} alt={'3. 얼굴 인증 완료'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          최종적으로 KYC 인증 신청이 완료되었으며,
          <br />
          심사 통과는 평균 1시간 이내 소요됩니다.
        </p>
      </Card>
    </div>
  );
}

export default CameraCapture;
