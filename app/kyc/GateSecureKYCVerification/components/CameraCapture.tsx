import { Card } from '@/components/ui/card';
import Image from 'next/image';
import GateioCameraAuthentication01 from '@/assets/images/GateioCameraAuthentication02.jpg';
import GateioCameraAuthentication02 from '@/assets/images/GateioCameraAuthentication03.jpg';
import GateioCameraAuthentication03 from '@/assets/images/GateioCameraAuthentication04.jpg';

function CameraCapture() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 얼굴 인증 시작
        </h4>
        <div className={'flex justify-center'}>
          <Image src={GateioCameraAuthentication01} alt={'1. 얼굴 인증 시작'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          타원형 프레임에 얼굴을 맞춰 넣고,
          <br />
          천천히 360도 돌려주면
          <br />
          자동으로 로딩이 되며, 완료됩니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 얼굴 인증 완료
        </h4>
        <div className={'flex justify-center'}>
          <Image src={GateioCameraAuthentication02} alt={'2. 얼굴 인증 완료'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            최종적으로 KYC 인증 신청이 완료되었습니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>3. 승인 심사</h4>
        <div className={'flex justify-center'}>
          <Image src={GateioCameraAuthentication03} alt={'3. 승인 심사'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            심사 검토는 평균 2분 정도 소요되지만,
            <br />
            상황에 따라 최대 1시간까지도 걸릴 수 있습니다.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default CameraCapture;
