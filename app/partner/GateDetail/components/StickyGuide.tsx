'use client';
import { Card } from '@/components/ui/card';
import ArrowIcon from '@/components/icons/ArrowIcon';
import { Badge } from '@/components/ui/badge';
import RobotIcon from '@/components/icons/RobotIcon';
import { useRouter } from 'next/navigation';

// Tab 타입 정의
interface Tab {
  id: number;
  label: string;
}

interface StickyGuideProps {
  tabRefs: React.RefObject<(HTMLDivElement | null)[]>; // tabRefs의 타입 정의
  tabs: Tab[]; // Tab 타입의 배열
}

function StickyGuide({ tabRefs, tabs }: StickyGuideProps) {
  const router = useRouter();
  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        if (el) {
          tabRefs.current[2] = el; // el을 tabRefs에 명시적으로 할당
        }
      }}
      data-value={tabs[2].id}
      className="my-6 py-6"
    >
      <h2 className={'mb-6'}>Gate 페이백 가이드</h2>
      <div className={'mt-5'}>
        <Card
          className={
            'bg-bg1 border-none p-3 md:p-6 gap-3 md:gap-6 cursor-pointer'
          }
          onClick={() => router.push('/kyc/GateioAccountFAQ')}
        >
          <div className="flex justify-between items-start gap-10">
            <div
              className={'bg-white p-3 rounded-3xl shadow-md rounded-br-none'}
            >
              <p className={'text-sm md:text-lg font-bold'}>
                <span className={'text-primary'}>세 가지 단계</span>를 따라하고
                테더베이스에서{' '}
                <span className={'text-primary'}>거래소 UID를 연동</span>
                해주세요!
              </p>
            </div>
            <div>
              <ArrowIcon width={20} height={20} />
            </div>
          </div>
          <div className={'flex justify-between items-end gap-4'}>
            <div className={'flex items-center gap-2'}>
              <Badge
                className={'rounded-4xl font-bold text-xs md:text-md px-3'}
              >
                필수
              </Badge>
              <p className={'font-bold text-sm md:text-lg '}>
                쉽고 간단한 페이백 계정 만들기
              </p>
            </div>
            <RobotIcon
              width={130}
              height={'auto'}
              className={'w-[120px] md:w-fit'}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default StickyGuide;
