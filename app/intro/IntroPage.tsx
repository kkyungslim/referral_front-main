'use client';
import React from 'react';
import FeaturesSection from '@/app/intro/components/FeaturesSection';
import InfoPanel from '@/app/intro/components/InfoPanel';
import ContractSeal from '@/app/intro/components/ContractSeal';
import PaybackRewardStep from '@/app/intro/components/PaybackRewardStep';
import PaybackGraph from '@/app/intro/components/PaybackGraph';
import FeeSavingGraph from '@/app/intro/components/FeeSavingGraph';

function IntroPage() {
  return (
    <div className="bg-bg2">
      <FeaturesSection />
      <InfoPanel />
      <ContractSeal />
      <PaybackRewardStep />
      <PaybackGraph />
      <FeeSavingGraph />
    </div>
  );
}

export default IntroPage;
