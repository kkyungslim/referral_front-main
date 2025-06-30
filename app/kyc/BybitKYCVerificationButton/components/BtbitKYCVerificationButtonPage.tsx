import BybitKYCVerificationButton01 from '@/assets/images/BybitKYCVerificationButton01.jpg';
import BybitKYCVerificationButton02 from '@/assets/images/BybitKYCVerificationButton02.jpg';
import BybitKYCVerificationButton03 from '@/assets/images/BybitKYCVerificationButton03.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function BtbitKYCVerificationButtonPage() {
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
              1. 인증하기 버튼
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BybitKYCVerificationButton01}
                alt={'1. 인증하기 버튼'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              로그인 후 &apos;Verify Now&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 마이페이지에서 확인
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BybitKYCVerificationButton02}
                alt={'2. 마이페이지에서 확인'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                만약 &apos;Verify Now&apos;를 찾을 수 없다면
                <br />
                화면 좌측 상단의 프로필 이미지를 클릭합니다.
                <br />
                진입한 페이지에서 &apos;Verify Now&apos; 버튼을 클릭합니다.
              </p>
            </div>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              3. KYC 인증 준비
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BybitKYCVerificationButton03}
                alt={'3. KYC 인증 준비'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              &apos;Verify&apos; 을 클릭합니다.
            </p>
          </Card>
          <Card className={''}>
            <h4 className={'text-left font-bold'}>페이백 계정 만드는 방법</h4>
            <ul className={'flex flex-col gap-3'}>
              <li>
                <Link href={'/uidlink'} className={'text-front2 font-semibold'}>
                  1. Bybit 레퍼럴 코드 확인하기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BybitSignUpGuide'}
                  className={'text-front2 font-semibold'}
                >
                  2. Bybit 회원 가입 방법 안내{' '}
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BybitKYCVerificationButton'}
                  className={'text-primary font-semibold'}
                >
                  3. <span className={'underline'}>KYC 인증 버튼 찾기</span> ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BybitSecureKYCVerification'}
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

export default BtbitKYCVerificationButtonPage;
