'use client';
import { useState, useEffect, useRef } from 'react';
import StickyPolicy from '@/app/partner/GateDetail/components/StickyPolicy';
import StickyStats from '@/app/partner/GateDetail/components/StickyStats';
import StickyGuide from '@/app/partner/GateDetail/components/StickyGuide';
import StickyEvent from '@/app/partner/GateDetail/components/StickyEvent';
import { DefaultProps } from '@/lib/types';

// Tab 타입 정의
interface Tab {
  id: number;
  label: string;
}

const tabs: Tab[] = [
  { id: 0, label: '정책' },
  { id: 1, label: '통계' },
  { id: 2, label: '가이드' },
  { id: 3, label: '이벤트' },
];

function StickyTab({ eventList }: DefaultProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.label);

  // tabRefs의 타입을 명확히 지정
  const tabRefs = useRef<(HTMLDivElement | null)[]>(
    Array(tabs.length).fill(null),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entryId = Number(entry.target.getAttribute('data-value'));
          if (entry.isIntersecting) {
            setActiveTab(tabs[entryId].label); // Set the active tab when the content is in view
          }
        });
      },
      { threshold: 0.5 }, // Set the threshold to 50% visibility
    );

    // 각 tabRefs에 대해 observer를 설정
    tabRefs.current.forEach((tab) => {
      if (tab) observer.observe(tab);
    });

    return () => {
      tabRefs.current.forEach((tab) => {
        if (tab) observer.unobserve(tab);
      });
    };
  }, []);

  const handleTabClick = (tab: Tab) => {
    // Scroll to the respective tab content
    tabRefs.current[tab.id]?.scrollIntoView({ behavior: 'smooth' });

    // Wait for scroll to complete before changing the tab
    setTimeout(() => {
      setActiveTab(tab.label);
    }, 500); // 500ms delay to ensure scroll animation is finished
  };

  return (
    <section>
      <div className="container mx-auto mt-10">
        {/* Sticky Tab List */}
        <div className="sticky top-[70px] bg-white z-[15]">
          <div className="grid grid-cols-4 border-b-2 border-gray-300 ">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                onClick={() => handleTabClick(tab)}
                className={`cursor-pointer text-lg font-bold text-center py-2  ${
                  activeTab === tab.label
                    ? 'text-orange-500 border-b-2 mb-[-2px] border-orange-500'
                    : 'text-gray-700'
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        <StickyPolicy tabRefs={tabRefs} tabs={tabs} />
        <StickyStats tabRefs={tabRefs} tabs={tabs} />
        <StickyGuide tabRefs={tabRefs} tabs={tabs} />
        <StickyEvent tabRefs={tabRefs} tabs={tabs} eventList={eventList} />
      </div>
    </section>
  );
}

export default StickyTab;
