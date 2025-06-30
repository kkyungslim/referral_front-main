import { MARKETS } from '@/lib/types';
import {
  removeNonAlphanumeric,
  validateMarketName,
  validateUid,
} from '@/lib/utils';
import React from 'react';

async function UidSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const queries = (await searchParams) ?? {};
  const uid = queries?.uid as string;
  const marketName = queries?.marketName as string;

  const isUidValid = validateUid(uid);
  const isMarketNameValid = validateMarketName(marketName);

  return (
    <div>
      page
      <div>
        uid : {uid}, valid : {isUidValid ? 'true' : 'false'}
      </div>
      <div>
        marketName : {marketName}, valid :{' '}
        {isMarketNameValid ? 'true' : 'false'}
      </div>
      <div>
        둘 다 유효한 값임 : {isUidValid && isMarketNameValid ? 'true' : 'false'}
      </div>
    </div>
  );
}

export default UidSearchPage;
