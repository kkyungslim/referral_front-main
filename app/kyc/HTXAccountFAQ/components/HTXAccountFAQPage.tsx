import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function HTXAccountFAQPage() {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>
            HTX 페이백 계정 만들기
            <br /> 어떤 부분이 궁금하세요?
          </h2>
          <p className={'text-front2 font-semibold mt-1'}>
            많이 궁금해하는 내용들을 모아봤어요!
          </p>
        </div>
        <div className={'flex flex-col gap-4 mt-10'}>
          <Link href={'#'}>
            <Card className={'flex-row justify-between items-center'}>
              <div className="flex items-start gap-1">
                <p className={'font-bold text-primary md:text-lg text-sm'}>
                  1.
                </p>
                <div className={'flex flex-col'}>
                  <p className={'font-bold text-primary md:text-lg text-sm'}>
                    이미 계정이 있으신가요?
                  </p>
                  <p className={'md:text-sm text-xs text-front2 font-semibold'}>
                    HTX 기존 계정 사용자에요.
                  </p>
                </div>
              </div>
              <Badge className={'rounded-4xl text-xs'}>상담 연결</Badge>
            </Card>
          </Link>
          <Link href={'#'}>
            <Card className={'flex-row justify-between items-center'}>
              <div className="flex items-start gap-1">
                <p className={'font-bold text-primary md:text-lg text-sm'}>
                  2.
                </p>
                <div className={'flex flex-col'}>
                  <p className={'font-bold text-primary md:text-lg text-sm'}>
                    페이백 계정은 어디서 만들어요?
                  </p>
                  <p className={'md:text-sm text-xs text-front2 font-semibold'}>
                    HTX 레퍼럴 코드 확인하기
                  </p>
                </div>
              </div>
              <Badge className={'rounded-4xl'}>상담 연결</Badge>
            </Card>
          </Link>
          <Link href={'/kyc/HTXSignUpGuide'}>
            <Card className={'flex-row justify-between items-center'}>
              <div className="flex items-start gap-1">
                <p className={'font-bold text-primary md:text-lg text-sm'}>
                  3.
                </p>
                <div className={'flex flex-col'}>
                  <p className={'font-bold text-primary md:text-lg text-sm'}>
                    거래소는 어떻게 가입해요?
                  </p>
                  <p className={'md:text-sm text-xs text-front2 font-semibold'}>
                    HTX 회원 가입 방법 안내
                  </p>
                </div>
              </div>
            </Card>
          </Link>
          <Link href={'/kyc/HTXKYCVerificationButton'}>
            <Card className={'flex-row justify-between items-center'}>
              <div className="flex items-start gap-1">
                <p className={'font-bold text-primary md:text-lg text-sm'}>
                  4.
                </p>
                <div className={'flex flex-col'}>
                  <p className={'font-bold text-primary md:text-lg text-sm'}>
                    가입 후 어떻게 해요?
                  </p>
                  <p className={'md:text-sm text-xs text-front2 font-semibold'}>
                    KYC 인증 버튼 찾기
                  </p>
                </div>
              </div>
            </Card>
          </Link>
          <Link href={'/kyc/HTXSecureKYCVerification'}>
            <Card className={'flex-row justify-between items-center'}>
              <div className="flex items-start gap-1">
                <p className={'font-bold text-primary md:text-lg text-sm'}>
                  5.
                </p>
                <div className={'flex flex-col'}>
                  <p className={'font-bold text-primary md:text-lg text-sm'}>
                    KYC 인증이 필요할까요?
                  </p>
                  <p className={'md:text-sm text-xs text-front2 font-semibold'}>
                    안전한 거래를 위해 KYC 인증하기
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HTXAccountFAQPage;
