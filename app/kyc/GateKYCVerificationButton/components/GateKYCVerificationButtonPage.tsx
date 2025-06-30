import GateioKYCVerificationButton01 from '@/assets/images/GateioKYCVerificationButton01.jpg';
import GateioKYCVerificationButton02 from '@/assets/images/GateioKYCVerificationButton02.jpg';
import GateioKYCVerificationButton03 from '@/assets/images/GateioKYCVerificationButton03.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function GateKYCVerificationButtonPage() {
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
              1. 인증 시작하기
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={GateioKYCVerificationButton01}
                alt={'1. 인증 시작하기'}
              />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              &apos;Verify Now&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>2. 정보 입력</h4>
            <div className={'flex justify-center'}>
              <Image src={GateioKYCVerificationButton02} alt={'2. 정보 입력'} />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                국적에 &apos;Korea&apos;를 확인해주시고,
                <br />
                아래 세가지를 차례대로 입력합니다.
                <br />
                <br />
                Full name - 본인의 영문 이름
                <br /> ID type - 인증에 사용할 신분증 종류
                <br /> ID Number - 신분증 번호
              </p>
            </div>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              3. 개인정보수집 동의 체크
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={GateioKYCVerificationButton03}
                alt={'3. 개인정보수집 동의 체크'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                체크박스를 선택 후 &apos;Start&apos; 버튼을 클릭합니다.
              </p>
            </div>
          </Card>
          <Card className={''}>
            <h4 className={'text-left font-bold'}>페이백 계정 만드는 방법</h4>
            <ul className={'flex flex-col gap-3'}>
              <li>
                <Link href={'/uidlink'} className={'text-front2 font-semibold'}>
                  1. Gate 레퍼럴 코드 확인하기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/GateSignUpGuide'}
                  className={'text-front2 font-semibold'}
                >
                  2. Gate 회원 가입 방법 안내{' '}
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/GateKYCVerificationButton'}
                  className={'text-primary font-semibold'}
                >
                  3. <span className={'underline'}>KYC 인증 버튼 찾기</span> ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/GateSecureKYCVerification'}
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

export default GateKYCVerificationButtonPage;
