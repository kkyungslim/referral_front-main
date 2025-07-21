'use client';
import LogoBlackIcon from '@/components/icons/LogoBlackIcon';
import Link from 'next/link';
import InstagramIcon from '@/assets/icons/InstargramIcon.png';
import TistoryIcon from '@/assets/icons/TistoryIcon.png';
import TelegramIcon from '@/components/icons/TelegramIcon';
import { usePathname } from 'next/navigation';
import LogoWhiteIcon from '@/components/icons/LogoWhiteIcon';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import TermsOfService from '@/components/TermsOfService';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import { Import } from 'lucide-react';
import Image from 'next/image';

const thisYear = new Date().getFullYear();

function Footer() {
  const pateName = usePathname();
  const isIntroPage = pateName === '/intro';

  return (
    <footer className={`${!isIntroPage ? 'bg-bg1' : 'bg-bg2'}`}>
      <div className="container mx-auto py-10">
        <div className="flex flex-col">
          <div>
            {!isIntroPage ? (
              <LogoBlackIcon width={162} height={29} />
            ) : (
              <LogoWhiteIcon width={162} height={29} />
            )}
          </div>
          <div>
            <p className="text-sm text-front2 font-semibold my-4">
              고유 법인 번호(UEN)
              <br />
              고객센터: 채팅 상담 (00:00 ~ 24:00)
            </p>
            <p className="text-sm text-front2 font-semibold mr-[3px]">
              copyright@{thisYear} | Tetherbase | All Right Reserved
            </p>
            <div className={'flex items-center'}>
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <span
                      className={
                        'text-front2 text-sm font-semibold cursor-pointer'
                      }
                    >
                      이용 약관
                    </span>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>이용약관</DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[450px] w-full ">
                      <TermsOfService />
                    </ScrollArea>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className={'w-full'}>확인</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
              <span className={'text-sm font-semibold text-front2 mx-[3px]'}>
                |
              </span>
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <span className={'text-front2 text-sm font-semibold'}>
                      개인정보처리방침
                    </span>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>개인정보처리방침</DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[450px] w-full ">
                      <PrivacyPolicy />
                    </ScrollArea>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className={'w-full'}>확인</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
            <p className="text-sm text-front2 font-semibold my-4">
              테더베이스의 정보/이벤트/UI를 포함한 모든 콘텐츠는 저작권법,
              콘텐츠 산업 진흥원의 보호를 받습니다.
              <br />
              무단복제, 전송, 배포, 스크래핑 등의 행위는 관련 법령에 의하여
              엄격히 금지됩니다.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/*<Link href={'/'}>*/}
            {/*  <YouTubeIcon width={35} height={23} />*/}
            {/*</Link>*/}
            <Link href={'https://t.me/a0s2d3f4w1q'} target={'_blank'}>
              <TelegramIcon width={35} height={35} />
            </Link>
            <Link href={'https://www.instagram.com/tetherbase_official/'} target={'_blank'}>
              <Image src={InstagramIcon} alt={'Instagram'} width={35} height={35}/>
            </Link>
            <Link href={'https://tetherbase.tistory.com/'} target={'_blank'}>
              <Image src={TistoryIcon} alt={'Tistory'} width={35} height={35}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
