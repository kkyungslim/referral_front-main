'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { NavItem, User } from '@/lib/types';
import { APIlogout } from '@/lib/API';
import UserIcon from '@/components/icons/UserIcon';

function PcNavigation({
  user,
  pcNavItem,
  isIntroPage,
}: {
  user: User | undefined;
  pcNavItem: NavItem[];
  isIntroPage: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <nav className="hidden lg:flex items-center justify-center gap-4">
        {pcNavItem.map((item, index) => (
          <div key={index}>
            <Link
              href={item.href}
              className={`text-front2 font-bold hover:text-primary
                ${pathname === item.href ? 'text-primary' : `${!isIntroPage ? 'text-front2' : 'text-white'}`}`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="hidden lg:flex gap-4">
        {user ? (
          <div className={'flex items-center gap-3'}>
            <Button
              className={'rounded-2xl text-base'}
              onClick={() => router.push('/mypage')}
            >
              마이페이지
            </Button>
            <Button
              className=" rounded-2xl text-base"
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
        ) : (
          <div className={'flex gap-3'}>
            <Link href={'/login'} className="flex-1/2">
              <Button className="w-full  text-base">로그인</Button>
            </Link>
            <Link href={'/signup'}>
              <Button
                variant={'outline'}
                className={`text-base ${!isIntroPage ? '' : 'bg-bg2 text-white'}`}
              >
                회원가입
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default PcNavigation;
