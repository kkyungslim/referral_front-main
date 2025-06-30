'use client';

import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import TooltipIcon from '@/components/icons/TooltipIcon';
import UserIcon from '@/components/icons/UserIcon';
import FirstPriorityIcon from '@/components/icons/FirstPriorityIcon';
import SecondPriorityIcon from '@/components/icons/SecondPriorityIcon';
import ThirdPriorityIcon from '@/components/icons/ThirdPriorityIcon';
import React from 'react';

interface Tab {
  id: number;
  label: string;
}

interface StickyStatsProps {
  tabRefs: React.RefObject<(HTMLDivElement | null)[]>;
  tabs: Tab[];
}

// 최근 5개월(현재월 제외) 라벨 반환
function getLastFiveMonths(): string[] {
  const now = new Date();
  const months: string[] = [];

  for (let i = 5; i >= 1; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = date.getMonth() + 1;
    months.push(`${month}월`);
  }

  return months;
}

function StickyStats({ tabRefs, tabs }: StickyStatsProps) {
  const monthLabels = getLastFiveMonths(); // 자동 생성된 월 라벨

  // 금액 및 그래프 높이 클래스
  const amounts = ['14만원', '15만원', '8만원', '13만원', '15만원'];
  const heightClasses = ['h-35', 'h-40', 'h-15', 'h-30', 'h-40'];

  // 평균 계산
  const numericAmounts = amounts.map((str) =>
    parseInt(str.replace('만원', '')),
  );
  const averageAmount =
    numericAmounts.reduce((a, b) => a + b, 0) / numericAmounts.length;
  const topUsers = [
    { uid: '00000214', usdt: '221.15' },
    { uid: '00001168', usdt: '149.23' },
    { uid: '00007367', usdt: '93.02' },
  ];
  return (
    <div
      ref={(el) => {
        if (el) {
          tabRefs.current[1] = el;
        }
      }}
      data-value={tabs[1].id}
      className="my-6 py-6"
    >
      <h2 className="mb-6">BingX 통계 데이터</h2>
      <div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-end gap-1">
            <Badge className="text-lg rounded-4xl px-6 font-bold">
              평균 환급액
            </Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TooltipIcon width={17} height={17} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs font-semibold">
                    평균 환급액은 아래 표시된 기간 동안의 모든
                    <br />
                    환급액을 가입 한 인원수로 나눈 금액이에요
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <span className="text-2xl text-primary font-bold">
            {averageAmount.toFixed(1)} 만원
          </span>
        </div>

        <div className="flex justify-between items-center mt-5">
          {monthLabels.map((label, idx) => (
            <div key={label} className="flex flex-col gap-2 items-center">
              <div className="w-12 md:w-15 border h-50 shadow relative rounded-xl overflow-hidden flex items-end">
                <div className="flex flex-col items-center justify-end w-full h-full">
                  <span className="text-sm font-semibold text-front2">
                    {amounts[idx]}
                  </span>
                  <div
                    className={`w-full ${heightClasses[idx]} bg-gradient-to-t from-primary via-[#F77D06] via-[#F78918] via-[#F79F34] via-[#F6BC5C] to-[#F6D27A]`}
                  ></div>
                </div>
              </div>
              <span className="text-front2 text-xl font-bold">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-front2 text-xs mt-5">
          *최근 5개월간 테더베이스에서 환급한 금액의 통계입니다.
        </p>
      </div>

      <div className="mt-10">
        <div>
          <Badge className="text-lg rounded-4xl px-6 font-bold">
            페이백 왕
          </Badge>
        </div>
        <div className="flex flex-col mt-5 gap-4">
          {topUsers.map((user, index) => {
            const rank = index + 1;
            return (
              <div key={rank} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <UserIcon width={50} height={50} />
                  <div>
                    <p className="text-sm font-semibold text-front2 opacity-70">
                      {`****${user.uid.slice(4)}`}
                    </p>
                    <p className="font-bold text-front2">{user.usdt} USDT</p>
                  </div>
                </div>
                {rank === 1 ? (
                  <FirstPriorityIcon width={50} height={50} />
                ) : rank === 2 ? (
                  <SecondPriorityIcon width={50} height={50} />
                ) : (
                  <ThirdPriorityIcon width={50} height={50} />
                )}
              </div>
            );
          })}
        </div>
        <p className="text-center text-front2 text-xs mt-5">
          *최근 30일간 테더베이스가 돌려준 페이백 금액으로 순위를 매겼어요.
        </p>
      </div>
    </div>
  );
}

export default StickyStats;
