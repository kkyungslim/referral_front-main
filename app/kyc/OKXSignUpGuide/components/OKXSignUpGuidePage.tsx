import OKXSignGuide01 from '@/assets/images/OKXSignGuide01.jpg';
import OKXSignGuide02 from '@/assets/images/OKXSignGuide02.jpg';
import OKXSignGuide03 from '@/assets/images/OKXSignGuide03.png';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function OKXSignUpGuidePage() {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>거래소는 어떻게 가입해요?</h2>
          <p className={'text-front2 mt-1'}>OKX 회원 가입 방법 안내</p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              1. 이메일 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={OKXSignGuide01} alt={'1. 이메일 입력'} />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              계정으로 사용할 이메일을 입력 후 &apos;Sign up&apos; 버튼을
              클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 이메일 인증번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={OKXSignGuide02} alt={'2. 이메일 인증번호 입력'} />
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
            <h4 className={'text-left text-primary font-bold'}>
              3. 핸드폰 번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={OKXSignGuide03} alt={'3. 핸드폰 번호 입력'} />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              OKX 거래소는 이메일과 핸드폰 번호를
              <br />
              모두 인증해야 가입을 완료할 수 있습니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              4. 핸드폰 인증번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={OKXSignGuide03} alt={'3. 핸드폰 인증번호 입력'} />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                입력한 핸드폰 번호로 전송된 인증번호 6자리를 입력해주세요.
              </p>
              <p className={'text-center text-primary font-semibold mt-2'}>
                *1분 후 문자 재전송이 가능해요
              </p>
            </div>
          </Card>
          <Card className={''}>
            <h4 className={'text-left font-bold'}>페이백 계정 만드는 방법</h4>
            <ul className={'flex flex-col gap-3'}>
              <li>
                <Link href={'/uidlink'} className={'text-front2 font-semibold'}>
                  1. OKX 레퍼럴 코드 확인하기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/OKXSignUpGuide'}
                  className={'text-primary font-semibold'}
                >
                  2.{' '}
                  <span className={'underline'}>OKX 회원 가입 방법 안내 </span>
                  ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/OKXKYCVerificationButton'}
                  className={'text-front2 font-semibold'}
                >
                  3. KYC 인증 버튼 찾기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/OKXSecureKYCVerification'}
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

export default OKXSignUpGuidePage;
