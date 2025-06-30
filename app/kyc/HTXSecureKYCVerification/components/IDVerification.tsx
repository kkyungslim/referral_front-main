import { Card } from '@/components/ui/card';
import Image from 'next/image';
import IDVerification01 from '@/assets/images/IDVerification01.jpg';
import HTXIDVerification02 from '@/assets/images/HTXIDVerification02.jpg';
import HTXIDVerification03 from '@/assets/images/HTXIDVerification03.jpg';
import HTXIDVerification04 from '@/assets/images/HTXIDVerification04.jpg';
import HTXIDVerification05 from '@/assets/images/HTXIDVerification05.jpg';

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
          2. 국가 및 기본정보 입력
        </h4>
        <div className={'flex justify-center'}>
          <Image src={HTXIDVerification02} alt={'2. 국가 및 기본정보 입력'} />
        </div>
        <div>
          <p className={'text-center font-semibold text-sm md:text-base'}>
            맨 위에서부터 차례대로
            <br />
            국적, 본인의 성(영문), 본인의 이름(영문),
            <br />
            그리고 생년월일을 기입해주면 됩니다.
          </p>
        </div>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>3. 국가 검색</h4>
        <div className={'flex justify-center'}>
          <Image src={HTXIDVerification03} alt={'3. 국가 검색'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          먼저 국적을 선택해줘야 하는데,
          <br />
          &apos;Korea&apos;를 검색하여 선택합니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>
          4. 생년월일 입력하기
        </h4>
        <div className={'flex justify-center'}>
          <Image src={HTXIDVerification04} alt={'4. 생년월일 입력하기'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          성과 이름을 영문으로 기입한 다음,
          <br />
          본인의 생년월일을 선택해 &apos;Confirm&apos; 버튼을 클릭합니다.
        </p>
      </Card>
      <Card>
        <h4 className={'text-left text-primary font-bold'}>5. 1단계 마무리</h4>
        <div className={'flex justify-center'}>
          <Image src={HTXIDVerification05} alt={'5. 1단계 마무리'} />
        </div>
        <p className={'text-center font-semibold text-sm md:text-base'}>
          모든 내용을 입력했다면, Level 1 인증이 완료됩니다.
          <br />
          하단의 파란색 버튼을 클릭해
          <br />
          Level 2 인증으로 넘어갑니다.
        </p>
      </Card>
    </div>
  );
}

export default IDVerification;
