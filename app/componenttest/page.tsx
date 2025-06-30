'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import sampleIcon from '@/assets/icons/sampleIcon.svg';
import sampleImage from '@/assets/images/sample.jpg';

function InputSection() {
  const [value, setValue] = useState('');

  return (
    <article className="p-4 mb-4">
      Input
      <Input
        value={value}
        variant={'default'}
        onChange={(e) => setValue(e.target.value)}
        placeholder="입력해주세요"
      />
    </article>
  );
}

function ComponentTest() {
  return (
    <Fragment>
      <div>컴포넌트 테스트 페이지. app/componenttest/page.tsx 참조</div>
      <section>
        <div>컴포넌트</div>
        <article className="p-4 mb-4 block">
          <h1>H1 / 40px / Bold / text-4xl</h1>
          <h2>H2 / 32px / Bold / text-3xl</h2>
          <h3>H3 / 28px / Bold / text-2xl</h3>
          <h4>H4 / 24px / SamiBold / text-xl</h4>
          <h5>H5 / 20px / SemiBold / text-lg</h5>
          <h6>H6 / 16px / Medium / text-lg</h6>
          <p>Paragraph / 16px / Medium / text-lg</p>
          <a href="#">Anchor / 16px / Medium / text-lg</a>
        </article>

        <article className="p-4 mb-4 flex flex-col">
          버튼
          <Button>프라이머리 버튼</Button>
          <Button disabled={true}>버튼 비활성화</Button>
          <Button variant={'secondary'}>세컨더리 버튼</Button>
          <Button variant={'gray'}>그레이 버튼</Button>
          <Button variant={'outline'}>아웃라인 버튼</Button>
          <Button variant={'gray'} disabled={true}>
            그레이 버튼 비활성화
          </Button>
        </article>

        <article className="p-4 mb-4 flex flex-col">
          배지
          <Badge>현재 진행 중</Badge>
          <Badge variant={'warning'}>현재 진행 중</Badge>
          <Badge variant={'secondary'}>세컨더리배지</Badge>
        </article>

        <Card>
          <div>카드</div>
        </Card>

        <InputSection></InputSection>

        <div>
          아이콘/이미지
          <Card>
            <Image
              width={40}
              height={40}
              src={sampleIcon}
              alt="샘플아이콘"
            ></Image>
            <Image
              src={sampleImage}
              alt="샘플이미지"
              width={300}
              height={200}
            ></Image>
          </Card>
        </div>
      </section>
    </Fragment>
  );
}

export default ComponentTest;
