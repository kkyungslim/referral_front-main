'use client';
import { useState } from 'react';
import UIDCarousel from '@/app/home/components/UIDCarousel';
import partnerData from '@/components/partnerData';
import UIDSearchDialogMain from '@/components/UIDSearchDialogMain';

function UIDsearch() {
  const [partnerActive, setPartnerActive] = useState(partnerData[0]);
  const [uid, setUid] = useState('');
  return (
    <section>
      <div className="container mx-auto">
        <div className="my-5 bg-primary p-4 rounded-2xl">
          <h2 className="text-white text-end md:text-3xl text-[30px]">
            <span className="text-base">
              선물거래 수수료 페이백 플랫폼, 테더베이스
            </span>{' '}
            <span className={'inline-block mb-4 '}>PayBack!</span>
          </h2>
          <UIDSearchDialogMain
            partnerActive={partnerActive}
            setPartnerActive={setPartnerActive}
            uid={uid}
            setUid={setUid}
          />
          <hr className="border-[1px] rounded-2xl border-white my-5" />
          <UIDCarousel
            partnerData={partnerData}
            partnerActive={partnerActive}
            setPartnerActive={setPartnerActive}
          />
        </div>
      </div>
    </section>
  );
}

export default UIDsearch;
