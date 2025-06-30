import BybitSignGuide01 from '@/assets/images/BybitSignGuide01.jpg';
import BybitSignGuide02 from '@/assets/images/BybitSignGuide02.jpg';
import BybitSignGuide03 from '@/assets/images/BybitSignGuide03.jpg';
import BybitSignGuide04 from '@/assets/images/BybitSignGuide04.jpg';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function BybitSignUpGuidePage() {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>거래소는 어떻게 가입해요?</h2>
          <p className={'text-front2 mt-1'}>Bybit 회원 가입 방법 안내</p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              1. 이메일과 비밀번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={BybitSignGuide01} alt={'1. 이메일과 비밀번호 입력'} />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              계정으로 사용할 이메일과 비밀번호를 입력 후
              <br />
              &apos;Get My Welcome Gifts&apos; 버튼을 클릭합니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              2. 이메일 인증번호 입력
            </h4>
            <div className={'flex justify-center'}>
              <Image src={BybitSignGuide02} alt={'2. 이메일 인증번호 입력'} />
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
              <Image src={BybitSignGuide03} alt={'3. 캡처 인증'} />
            </div>
            <p className={'text-center font-semibold text-sm md:text-base'}>
              캡처 인증을 해야 할 수도 있습니다.
              <br />
              해당 퍼즐을 움직이시면 됩니다.
            </p>
          </Card>
          <Card>
            <h4 className={'text-left text-primary font-bold'}>
              4. 가입 완료 및 스토어에서 다운받기
            </h4>
            <div className={'flex justify-center'}>
              <Image
                src={BybitSignGuide04}
                alt={'4. 가입 완료 및 스토어에서 다운받기'}
              />
            </div>
            <div>
              <p className={'text-center font-semibold text-sm md:text-base'}>
                가입을 완료하셨다면 앱을 다운받아야 합니다.
                <br />
                주황 버튼을 클릭해 Appstore, Playstore에서
                <br />
                바이비트 앱을 다운받아주세요.
              </p>
              <p className={'text-center text-primary font-semibold mt-2'}>
                *KYC 인증은 앱에서만 가능해요
              </p>
            </div>
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
                  className={'text-primary font-semibold'}
                >
                  2.{' '}
                  <span className={'underline'}>
                    Bybit 회원 가입 방법 안내{' '}
                  </span>
                  ◀
                </Link>
              </li>
              <li>
                <Link
                  href={'/kyc/BybitKYCVerificationButton'}
                  className={'text-front2 font-semibold'}
                >
                  3. KYC 인증 버튼 찾기
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

export default BybitSignUpGuidePage;
