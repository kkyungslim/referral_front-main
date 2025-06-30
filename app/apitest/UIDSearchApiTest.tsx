'use client';

import { ObjectViewer } from '@/components/ObjectViewer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { APIUidSearch } from '@/lib/API';
import { UNDEFINED } from '@/lib/Constants';
import { Market, MARKETS } from '@/lib/types';
import React, { Fragment } from 'react';

const UIDSearchApiTest = ({ marketList }: { marketList: Market[] }) => {
  'use client';
  const [uid, setUid] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [selectedMarket, setSelectedMarket] = React.useState<string>(
    marketList[0].name,
  );

  const [res, setRes] = React.useState<any>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (uid.trim().length === 0) {
      alert('uid를 입력해주세요');
      return;
    }

    const selectedUpperCase = selectedMarket.toUpperCase();

    if (!MARKETS.includes(selectedUpperCase.toUpperCase() as any)) {
      alert('마켓을 선택해주세요');
      return;
    }

    e.preventDefault();
    setLoading(true);
    APIUidSearch({
      uid,
      marketName: selectedUpperCase as any,
    }).then((res) => {
      setRes({
        APIUidSearch: res,
      });
    });
  };

  return (
    <article>
      <h4>UID Search</h4>
      <form onSubmit={onSubmit}>
        <div>
          <select
            value={selectedMarket}
            onChange={(e) =>
              setSelectedMarket((e.target as HTMLSelectElement).value)
            }
            className="inline-block"
          >
            {marketList.map((market) => {
              return (
                <option key={`api-test-${market.name}`} value={market.name}>
                  {market.name}
                </option>
              );
            })}
          </select>
          <Input
            className="inline-block"
            type="text"
            value={uid}
            onChange={(e) => setUid(e.target.value.trim())}
          />
        </div>

        <Button type="submit">검색</Button>
      </form>
      UID Search 결과
      <ObjectViewer data={res}></ObjectViewer>
    </article>
  );
};

export default UIDSearchApiTest;
