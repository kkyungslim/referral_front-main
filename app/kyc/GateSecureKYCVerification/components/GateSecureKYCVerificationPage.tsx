import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CameraCapture from '@/app/kyc/GateSecureKYCVerification/components/CameraCapture';
import IDVerification from '@/app/kyc/GateSecureKYCVerification/components/IDVerification';
import VerificationCompletion from '@/app/kyc/GateSecureKYCVerification/components/VerificationCompletion';

function GateSecureKYCVerificationPage() {
  const tabData = [
    {
      value: 'idCard',
      title: '신분증 인증',
    },
    {
      value: 'camera',
      title: '카메라 촬영',
    },
    {
      value: 'complete',
      title: '완료 확인',
    },
  ];
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-15">
        <div className={'text-center'}>
          <h2>KYC 인증이 필요할까요?</h2>
          <p className={'text-front2 mt-1'}>안전한 거래를 위해 KYC 인증하기</p>
        </div>
        <Tabs defaultValue="idCard" className="gap-0 ">
          <TabsList
            className={
              'text-front2 bg-transparent mx-auto my-5 border-b-front3 border-b-2 rounded-none p-0 w-full mb-10'
            }
          >
            {tabData.map((item, index) => (
              <TabsTrigger
                value={item.value}
                className={
                  'text-lg pb-3 font-bold  data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-primary border-b-2  rounded-none mx-0 px-0 mb-[-4px]'
                }
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="idCard">
            <IDVerification />
          </TabsContent>
          <TabsContent value="camera">
            <CameraCapture />
          </TabsContent>
          <TabsContent value="complete">
            <VerificationCompletion />
          </TabsContent>
        </Tabs>
        <Card className={'mt-5'}>
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
                className={'text-front2 font-semibold'}
              >
                3. KYC 인증 버튼 찾기
              </Link>
            </li>
            <li>
              <Link
                href={'/kyc/GateSecureKYCVerification'}
                className={'text-primary font-semibold'}
              >
                4.{' '}
                <span className={'underline'}>
                  안전한 거래를 위해 KYC 인증하기
                </span>{' '}
                ◀
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

export default GateSecureKYCVerificationPage;
