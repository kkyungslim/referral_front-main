'use client';
import TestIntro from '@/app/payback/components/TestIntro';
import PayBackQuestion from '@/app/payback/components/PayBackQuestion';
import PayBackResult, { PaybackTestResultData } from "@/app/payback/components/PayBackResult";
import { useState } from 'react';

function PaybackTestPage() {
  // 상태를 사용하여 현재 렌더링되는 컴포넌트를 추적\
  const [currentComponent, setCurrentComponent] = useState<
    'result' | 'question' | 'intro'
  >('intro');

  const [selectedMarket, setSelectedMarket] = useState<number>(0);
  const [resultData, setResultData] = useState<PaybackTestResultData | null>(null);

  // section의 배경 색상을 currentComponent에 따라 다르게 설정
  const sectionBgClass = currentComponent === 'result' ? 'bg-bg1' : '';
  return (
    <section className={`${sectionBgClass} transition-colors duration-300`}>
      <div className="container mx-auto py-15">
        {currentComponent === 'intro' && (
          <TestIntro setCurrentComponent={setCurrentComponent} />
        )}
        {currentComponent === 'question' && (
          <PayBackQuestion
            currentComponent={currentComponent}
            setCurrentComponent={setCurrentComponent}
            setResultData={setResultData}
            setSelectedMarket={setSelectedMarket}
          />
        )}
        {currentComponent === 'result' && (
          <PayBackResult
            currentComponent={currentComponent}
            setCurrentComponent={setCurrentComponent}
            resultData={resultData}
            selectedMarket={selectedMarket}
          />
        )}
      </div>
    </section>
  );
}

export default PaybackTestPage;
