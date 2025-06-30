import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import React, { Fragment } from 'react';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Fragment>
      <div className="flex flex-col">
        <nav className="w-full h-10 bg-amber-50 flex items-center justify-center">
          <BackButton></BackButton>
          네비게이션 바 예시. app/componenttest/layout.tsx 참조
        </nav>

        <div className="flex-1 min-h-0">{children}</div>
      </div>
    </Fragment>
  );
}

export default Layout;
