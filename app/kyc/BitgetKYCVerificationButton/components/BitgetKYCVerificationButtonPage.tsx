import BitgetKYCVerificationButton01 from '@/assets/images/BitgetKYCVerificationButton01.jpg';
import BitgetKYCVerificationButton02 from '@/assets/images/BitgetKYCVerificationButton02.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function BitgetKYCVerificationButtonPage() {
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
              1. 나의 정보 버튼 찾기
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BitgetKYCVerificationButton01}
                alt={'1. 나의 정보 버튼 찾기'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              로그인 후, 첫 화면에서 &apos;Verify&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 인증 페이지 진입
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BitgetKYCVerificationButton02}
                alt={'2. 인증 페이지 진입'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                &apos;Verify new&apos; 버튼을 클릭합니다.
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
                  className={'text-front2 font-semibold'}
                >
                  2. Bitget 회원 가입 방법 안내{' '}
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BitgetKYCVerificationButton'}
                  className={'text-primary font-semibold'}
                >
                  3. <span className={'underline'}>KYC 인증 버튼 찾기</span> ◀
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

export default BitgetKYCVerificationButtonPage;
