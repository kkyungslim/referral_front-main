import BingXSignGuide01 from '@/assets/images/BingXSignGuide01.jpg';
import BingXSignGuide02 from '@/assets/images/BingXSignGuide02.jpg';
import BingXSignGuide03 from '@/assets/images/BingXSignGuide03.jpg';
import BingXSignGuide04 from '@/assets/images/BingXSignGuide04.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function BingXSignUpGuidePage() {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>거래소는 어떻게 가입해요?</h2>
          <p className={'text-front2 mt-1'}>BingX 회원 가입 방법 안내</p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              1. 이메일과 비밀번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={BingXSignGuide01} alt={'1. 이메일과 비밀번호 입력'} />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              계정으로 사용할 이메일과 비밀번호를 입력 후<br />
              &apos;Sign Up&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 이메일 인증번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={BingXSignGuide02} alt={'2. 이메일 인증번호 입력'} />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                우측 상단에 있는 그림 순서대로
                <br />
                사진 속 그림을 차례대로 눌러준 다음,
                <br />
                &apos;OK&apos; 버튼을 클릭합니다.
              </p>
            </div>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              3. 이메일 인증번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BingXSignGuide03}
                alt={'3. 가입 완료 및 앱 설치하기'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              이메일로 전송된 인증번호를 입력한 다음,
              <br />
              하단의 파란색 버튼을 클릭합니다.
              <br />
              <span className={'text-primary'}>
                *1분 후 이메일 재전송이 가능해요.
              </span>
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              4. 가입 완료 및 앱 설치하기
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BingXSignGuide04}
                alt={'3. 가입 완료 및 앱 설치하기'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              가입을 완료하셨다면 파란 버튼을 눌러
              <br />
              BingX 앱을 설치해줘야 합니다.
              <br />
              앱스토어 또는 플레이스토어에서 설치해주세요.
              <br />
              <span className={'text-primary'}>
                *KYC 인증은 앱에서 진행하시길 권장드립니다.
              </span>
            </p>
          </Card>
          <Card className={''}>
            <h4 className={'text-left font-bold'}>페이백 계정 만드는 방법</h4>
            <ul className={'flex flex-col gap-3'}>
              <li>
                <Link href={'/uidlink'} className={'text-front2 font-semibold'}>
                  1. BingX 레퍼럴 코드 확인하기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BingXSignUpGuide'}
                  className={'text-primary font-semibold'}
                >
                  2.{' '}
                  <span className={'underline'}>
                    BingX 회원 가입 방법 안내{' '}
                  </span>
                  ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BingXKYCVerificationButton'}
                  className={'text-front2 font-semibold'}
                >
                  3. KYC 인증 버튼 찾기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BingXSecureKYCVerification'}
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

export default BingXSignUpGuidePage;
