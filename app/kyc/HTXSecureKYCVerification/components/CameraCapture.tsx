import { Card } from '@/components/ui/card';
import Image from 'next/image';
import HTXCameraAuthentication01 from '@/assets/images/HTXCameraAuthentication01.jpg';
import HTXCameraAuthentication02 from '@/assets/images/HTXCameraAuthentication02.jpg';

function CameraCapture() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          1. 국적 및 신분증 선택
        </h4>
        <div className={'flex justify-center'}>
          <Image
            src={HTXCameraAuthentication01}
            alt={'1. 국적 및 신분증 선택'}
          />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          국가에 &apos;Korea&apos; 선택 후,
          <br />
          인증에 사용할 신분증 종류를 선택합니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          2. 신분증 사진 촬영 및 업로드
        </h4>
        <div className={'flex justify-center'}>
          <Image
            src={HTXCameraAuthentication02}
            alt={'2. 신분증 사진 촬영 및 업로드'}
          />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            선택한 신분증의 앞면과 뒷면을 각각 촬영하여 업로드합니다.
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
        </div>
      </Card>
    </div>
  );
}

export default CameraCapture;
