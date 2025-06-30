import HTXKYCVerificationButton01 from '@/assets/images/HTXKYCVerificationButton01.jpg';
import HTXKYCVerificationButton02 from '@/assets/images/HTXKYCVerificationButton02.jpg';
import HTXKYCVerificationButton03 from '@/assets/images/HTXKYCVerificationButton03.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function HTXKYCVerificationButtonPage() {
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
                src={HTXKYCVerificationButton01}
                alt={'1. 나의 정보 버튼 찾기'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              앱에서 로그인 후 좌측 상단의 얼굴 모양 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 마이페이지 확인
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={HTXKYCVerificationButton02}
                alt={'2. 마이페이지 확인'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                프로필 메뉴 상단에 있는
                <br />
                &apos;Unverified&apos; 버튼을 클릭합니다.
              </p>
            </div>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              3. 인증 레벨 선택하기
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={HTXKYCVerificationButton03}
                alt={'3. 인증 레벨 선택하기'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                먼저 Level 1 Basic Permissions 우측에 있는
                <br />
                &apos;Verify&apos; 버튼을 클릭합니다.
              </p>
            </div>
          </Card>
          <Card className={''}>
            <h4 className={'text-left font-bold'}>페이백 계정 만드는 방법</h4>
            <ul className={'flex flex-col gap-3'}>
              <li>
                <Link href={'/uidlink'} className={'text-front2 font-semibold'}>
                  1. HTX 레퍼럴 코드 확인하기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/HTXSignUpGuide'}
                  className={'text-front2 font-semibold'}
                >
                  2. HTX 회원 가입 방법 안내{' '}
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/HTXKYCVerificationButton'}
                  className={'text-primary font-semibold'}
                >
                  3. <span className={'underline'}>KYC 인증 버튼 찾기</span> ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/HTXSecureKYCVerification'}
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

export default HTXKYCVerificationButtonPage;
