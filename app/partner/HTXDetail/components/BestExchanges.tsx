'use client';
import FlowCarousel from '@/components/FlowCaousel';
import React from 'react';

function BestExchanges() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className={'mb-6'}>테더베이스가 추천하는 거래소</h2>
        <FlowCarousel speed={1.5} />
      </div>
    </section>
  );
}

export default BestExchanges;
