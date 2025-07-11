import BitgetSignGuide01 from '@/assets/images/BitgetSignGuide01.png';
import BitgetSignGuide02 from '@/assets/images/BitgetSignGuide02.jpg';
import BitgetSignGuide03 from '@/assets/images/BitgetSignGuide03.jpg';
import BitgetSignGuide04 from '@/assets/images/BitgetSignGuide04.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function BitgetSignUpGuidePage() {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>거래소는 어떻게 가입해요?</h2>
          <p className={'text-front2 mt-1'}>Bitget 회원 가입 방법 안내</p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              1. 이메일과 비밀번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BitgetSignGuide01}
                alt={'1. 이메일과 비밀번호 입력'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              계정으로 사용할 이메일과 비밀번호를 입력 후 <br />
              &apos;Create Account&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 이메일 인증번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={BitgetSignGuide02} alt={'2. 이메일 인증번호 입력'} />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                입력한 이메일로 전송된
                <br />
                인증번호 6자리를 입력해주세요.
              </p>
              <p className={'text-center text-primary font-semibold mt-2'}>
                *1분 후 이메일 재전송이 가능해요
              </p>
            </div>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>3. 캡처 인증</h4>
            <div className={'flex justify-center'}>
              <Image src={BitgetSignGuide03} alt={'3. 캡처 인증'} />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              우측 상단에 있는 그림 순서대로
              <br />
              사진 속 그림을 차례대로 눌러준 다음,
              <br />
              OK 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              4. 가입 완료 및 스토어에서 다운받기
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BitgetSignGuide04}
                alt={'4. 가입 완료 및 스토어에서 다운받기'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                가입 완료 후, 자동으로 화면이 넘어갑니다.
              </p>
              <p className={'text-center text-primary font-semibold mt-2'}>
                *KYC 인증은 앱 설치 후, 진행하시는 걸 권장드립니다.
              </p>
            </div>
          </Card>
          <Card className={''}>
            <h4 className={'text-left font-bold'}>페이백 계정 만드는 방법</h4>
            <ul className={'flex flex-col gap-3'}>
              <li>
                <Link href={'/uidlink'} className={'text-front2 font-semibold'}>
                  1. Bitget 레퍼럴 코드 확인하기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BitgetSignUpGuide'}
                  className={'text-primary font-semibold'}
                >
                  2.{' '}
                  <span className={'underline'}>
                    Bitget 회원 가입 방법 안내{' '}
                  </span>
                  ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BitgetKYCVerificationButton'}
                  className={'text-front2 font-semibold'}
                >
                  3. KYC 인증 버튼 찾기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BitgetSecureKYCVerification'}
                  className={'text-front2 font-semibold'}
                >
                  4. 안전한 거래를 위해 KYC 인증하기
                </Link>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default BitgetSignUpGuidePage;
