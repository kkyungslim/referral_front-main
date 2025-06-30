import OKXKYCVerificationButton01 from '@/assets/images/OKXKYCVerificationButton01.jpg';
import OKXKYCVerificationButton02 from '@/assets/images/OKXKYCVerificationButton02.jpg';
import OKXKYCVerificationButton03 from '@/assets/images/OKXKYCVerificationButton03.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function OKXKYCVerificationButtonPage() {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>가입 후 어떻게 해요?</h2>
          <p className={'text-front2 mt-1'}>KYC 인증 버튼 찾기</p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              1. 인증 페이지 진입
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={OKXKYCVerificationButton01}
                alt={'1. 인증 페이지 진입'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              앱 설치 후, 로그인을 하고
              <br />
              메인 화면에서 &apos;Get verified&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>2. 국가 설정</h4>
            <div className={'flex justify-center'}>
              <Image src={OKXKYCVerificationButton02} alt={'2. 국가 설정'} />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                국가를 설정하고 &apos;Next&apos; 클릭합니다.
              </p>
            </div>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              3. 인증하기 버튼
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={OKXKYCVerificationButton03}
                alt={'3. 인증하기 버튼'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                &apos;Verify Now&apos; 버튼을 클릭합니다.
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
                  className={'text-front2 font-semibold'}
                >
                  2. OKX 회원 가입 방법 안내{' '}
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/OKXKYCVerificationButton'}
                  className={'text-primary font-semibold'}
                >
                  3. <span className={'underline'}>KYC 인증 버튼 찾기</span> ◀
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

export default OKXKYCVerificationButtonPage;
