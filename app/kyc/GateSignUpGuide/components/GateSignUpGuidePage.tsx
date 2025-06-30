import GateioSignGuide01 from '@/assets/images/GateioSignGuide01.jpg';
import GateioSignGuide02 from '@/assets/images/GateioSignGuide02.jpg';
import GateioSignGuide04 from '@/assets/images/GateioSignGuide04.jpg';
import GateioSignGuide05 from '@/assets/images/GateioSignGuide05.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function GateSignUpGuidePage() {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>거래소는 어떻게 가입해요?</h2>
          <p className={'text-front2 mt-1'}>Gate 회원 가입 방법 안내</p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              1. 회원 가입 페이지
            </h4>
            <div className={'flex justify-center'}>
              <Image src={GateioSignGuide01} alt={'1. 회원 가입 페이지'} />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              계정으로 사용할 이메일과 비밀번호를 입력하고,
              <br />
              약관에 동의 체크한 다음,
              <br />
              &apos;Sign Up&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 이메일 인증번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={GateioSignGuide04} alt={'2. 이메일 인증번호 입력'} />
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
              3. 가입 완료 화면
            </h4>
            <div className={'flex justify-center'}>
              <Image src={GateioSignGuide05} alt={'3. 가입 완료 화면'} />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                가입 완료 후 &apos;Verify Now&apos; 버튼을 클릭합니다.
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
                  1. Gate 레퍼럴 코드 확인하기
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/GateSignUpGuide'}
                  className={'text-primary font-semibold'}
                >
                  2.{' '}
                  <span className={'underline'}>Gate 회원 가입 방법 안내 </span>
                  ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/GateKYCVerificationButton'}
                  className={'text-front2 font-semibold'}
                >
                  3. KYC 인증 버튼 찾기
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

export default GateSignUpGuidePage;
