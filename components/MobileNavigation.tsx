'use client';
import HamburgerBarIcon from '@/components/icons/HamburgerBarIcon';
import Link from 'next/link';
import LogoBlackIcon from '@/components/icons/LogoBlackIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import Close from '@/components/icons/CloseIcon';
import { Button } from '@/components/ui/button';
import ArrowIcon from '@/components/icons/ArrowIcon';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { MobileNavItem, User } from '@/lib/types';
import { APIlogout } from '@/lib/API';

function MobileNavigation({
  user,
  mobileNavItem,
}: {
  user: User | undefined;
  mobileNavItem: MobileNavItem[];
}) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <HamburgerBarIcon width={35} height={35} />
      </div>
      <div
        className={`lg:hidden absolute right-0 top-0 w-full overflow-hidden
            after:absolute after:right-0 after:top-0 after:w-full after:bottom-0 after:bg-black after:opacity-30 h-[100vh] z-20
            ${!isActive ? 'invisible' : 'visible'}`}
      >
        {/* slide bar */}
        <div
          className={`absolute right-0 top-0 z-20 max-w-[350px] w-full h-full bg-white p-4 transition-all duration-500 ease-in-out 
        ${isActive ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center">
            <Link href={'/'}>
              <LogoBlackIcon width={162} height={29} />
            </Link>
            <div className="flex gap-4 items-center">
              <Link href={'/'}>
                <HomeIcon width={20} height={22} />
              </Link>
              <button
                className="cursor-pointer"
                onClick={() => setIsActive(!isActive)}
              >
                <Close width={20} height={20} color={'#111'} />
              </button>
            </div>
          </div>
          <div className="mt-9">
            <h3 className="mb-4 text-xl">
              거래 수수료 페이백!
              <br />
              <span className="text-primary">테더베이스</span>와 함께 하세요.
            </h3>
            <div className="w-full flex justify-between items-center gap-3">
              {user ? (
                <div className={'flex flex-col w-full gap-3'}>
                  <p className={'text-primary font-bold text-lg '}>
                    회원번호: {user.name}
                  </p>
                  <div className={'flex gap-3'}>
                    <Button
                      className={'flex-1/2 rounded-2xl'}
                      onClick={() => router.push('/mypage')}
                    >
                      마이페이지
                    </Button>
                    <Button
                      className="flex-1/2 rounded-2xl"
                      onClick={() => {
                        if (confirm('로그아웃 하시겠습니까?')) {
                          APIlogout().then(() => {
                            router.push('/');
                          });
                        }
                      }}
                    >
                      로그아웃
                    </Button>
                  </div>
                </div>
              ) : (
                <div className={'flex w-full justify-between gap-3'}>
                  <Link href={'/login'} className="flex-1/2">
                    <Button className="w-full rounded-2xl text-base">
                      로그인
                    </Button>
                  </Link>
                  <Link href={'/signup'} className="flex-1/2">
                    <Button
                      variant={'outline'}
                      className="w-full rounded-2xl text-base"
                    >
                      회원가입
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <hr className="border-[1.5px] mt-10 mb-8" />
          <nav>
            {mobileNavItem.map((item, index) => (
              <Link
                href={item.href}
                className={`flex text-lg justify-between items-center font-semibold
                  ${pathname === item.href ? 'text-primary' : 'text-front2'}`}
                key={index}
              >
                <div className="flex items-center gap-2 py-4">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <ArrowIcon width={10} height={15} />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
