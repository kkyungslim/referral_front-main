import LogoBlackIcon from '@/components/icons/LogoBlackIcon';
import Link from 'next/link';
import PartnerIcon from '@/components/icons/PartnerIcon';
import ServiceIcon from '@/components/icons/ServiceIcon';
import PaybackIcon from '@/components/icons/PaybackIcon';
import EventIcon from '@/components/icons/EventIcon';
import PcNavigation from '@/components/PcNavigation';
import MobileNavigation from '@/components/MobileNavigation';
import LogoWhiteIcon from '@/components/icons/LogoWhiteIcon';
import { serverPathname } from '@/lib/server/ServerUtils';
import { DefaultProps, MobileNavItem, NavItem } from '@/lib/types';

const pcNavItem: NavItem[] = [
  { name: '제휴 거래소', href: '/partner' },
  { name: '서비스 소개', href: '/intro' },
  { name: '페이백 테스트', href: '/payback' },
];

const mobileNavItem: MobileNavItem[] = [
  {
    name: '서비스 소개',
    href: '/intro',
    icon: <ServiceIcon width={22} height={22} />,
  },
  {
    name: '페이백 테스트',
    href: '/payback',
    icon: <PaybackIcon width={22} height={22} />,
  },
  {
    name: '거래소 이벤트',
    href: '/event',
    icon: <EventIcon width={22} height={22} />,
  },
  {
    name: '제휴 거래소',
    href: '/partner',
    icon: <PartnerIcon width={22} height={22} />,
  },
];

async function GlobalNavigation({ user }: DefaultProps) {

  const pathName = await serverPathname();
  const isIntroPage = pathName === '/intro';

  return (
    <header
      className={`#17181C border-b-2 sticky top-0 left-0 z-50
       ${!isIntroPage ? 'bg-white ' : ' bg-bg2 border-bg2'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <h1>
            <Link href={'/'}>
              {!isIntroPage ? (
                <LogoBlackIcon width={162} height={29} />
              ) : (
                <LogoWhiteIcon width={162} height={29} />
              )}
            </Link>
            <span className="sr-only">테더베이스 셀퍼럴</span>
          </h1>
          {/* PC navigation */}
          <PcNavigation
            user={user}
            pcNavItem={pcNavItem}
            isIntroPage={isIntroPage}
          />

          {/* MO Navigation */}
          <MobileNavigation user={user} mobileNavItem={mobileNavItem} />
        </div>
      </div>
    </header>
  );
}

export default GlobalNavigation;
