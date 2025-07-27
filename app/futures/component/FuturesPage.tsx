'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon';

// 이미지 import
import FuturesImagePC01 from '@/assets/images/futuresImagePC01.png';
import FuturesImageMO01 from '@/assets/images/futuresImageMO01.png';
import futuresBgPC from '@/assets/images/futuresBgPC.png';
import futuresBookPC from '@/assets/images/futuresBookPC.png';
import balloon01 from '@/assets/images/futuresBalloon01.png';
import balloon02 from '@/assets/images/futuresBalloon02.png';
import balloon03 from '@/assets/images/futuresBalloon03.png';
import balloon04 from '@/assets/images/futuresBalloon04.png';
import futuresPhone01 from '@/assets/images/futuresPhone01.png';
import futuresPhone02 from '@/assets/images/futuresPhone02.png';
import futuresPhone03 from '@/assets/images/futuresPhone03.png';
import BookIcon01 from '@/assets/images/BookIcon01.png';
import BookIcon02 from '@/assets/images/BookIcon02.png';
import LogoIcon from '@/components/icons/LogoIcon';
import { DefaultProps } from '@/lib/types';

gsap.registerPlugin(ScrollTrigger);

function FuturesPage({user}:DefaultProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const balloons = gsap.utils.toArray('.balloon') as HTMLElement[];

      // 1. 현재 보이는 요소만 필터링
      const visibleBalloons = balloons.filter((el) => el.offsetParent !== null);

      // 2. data-order 기준 정렬
      const orderedBalloons = visibleBalloons.sort((a, b) => {
        const orderA = parseInt(a.dataset.order || '0', 10);
        const orderB = parseInt(b.dataset.order || '0', 10);
        return orderA - orderB;
      });

      // 3. 애니메이션 적용
      gsap.from(orderedBalloons, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div>
      <section className="bg-[#17181C]">
        <div className="container mx-auto pb-10 md:pb-25">
          <div className="text-center py-8 md:py-15">
            <p className="font-bold text-white text-md md:text-2xl">
              다른곳에서는 절대 알려주지 않는 실전 전략
            </p>
            <p className="font-bold text-lg md:text-3xl text-white tracking-tighter md:tracking-normal">
              오직 여기 <span className="text-primary">‘테더베이스’</span>
              에서만 받을 수 있어요!
            </p>
          </div>
          <div className="relative">
            <Image
              className="hidden md:block"
              src={FuturesImagePC01}
              alt="코린이를 위한 실전 선물거래 가이드 테더베이스 가입만 해도 1~20강 전자책 무료 제공"
            />
            <Image
              className="w-full block md:hidden"
              src={FuturesImageMO01}
              alt="코린이를 위한 실전 선물거래 가이드 테더베이스 가입만 해도 1~20강 전자책 무료 제공"
            />
            <p
              className="h-fit absolute top-0 bottom-0 left-0 right-0 m-auto text-white text-center font-semibold text-[12px] md:text-xl">
              코린이를 위한 실전 선물거래 가이드
              <br />
              테더베이스 가입만 해도 1~20강 전자책 무료 제공!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#17181C]">
        {/* PC 기초만 */}
        <div className="mx-auto hidden md:block">
          <div className="relative">
            <Image
              src={futuresBgPC}
              alt="backgroundImage"
              className="mx-auto"
            />
            <div className="w-full flex justify-center items-center absolute top-0 bottom-0 m-auto gap-3 md:gap-8">
              <Image src={futuresBookPC} alt="book" className="" />
              <div>
                <div className="relative py-1 md:py-2 px-2 md:px-3 w-fit">
                  <span
                    className="absolute w-[10px] h-[10px] md:w-[20px] md:h-[20px] border-t-3 md:border-t-5 border-l-3 md:border-l-5 border-primary left-0 top-0"></span>
                  <span
                    className="absolute w-[10px] h-[10px] md:w-[20px] md:h-[20px] border-b-3 md:border-b-5 border-r-3 md:border-r-5 border-primary right-0 bottom-0"></span>
                  <p className="font-bold text-white text-md md:text-3xl leading-relaxed">
                    <span className="text-primary text-lg md:text-4xl">
                      기초
                    </span>
                    만 잡아도
                    <br />내{' '}
                    <span className="text-primary text-lg md:text-4xl">
                      수익률
                    </span>
                    이
                    <br />
                    달라집니다.
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-white font-semibold text-[10px] md:text-lg md:px-3 py-2 md:py-7">
                    “수수료 페이백도 받고,
                    <br />
                    선물거래 스터디 자료도 받아가세요”
                  </p>
                </div>
                <Link href={user ? '/uidlink' : '/login'}>
                  <Button
                    className="flex gap-2 md:gap-5 h-fit md:has-[>svg]:px-6 py-1 md:py-2 rounded-3xl font-semibold text-[12px] md:text-lg items-center">
                    <span>지금 무료로 받기</span>
                    <div>
                      <ArrowBottomIcon
                        width={15}
                        color="white"
                        className="rotate-270 hidden md:block [&_svg:not([class*='size-'])]:size-4"
                      />
                    </div>
                    <ArrowBottomIcon
                      width={8}
                      color="white"
                      className="rotate-270 block md:hidden [&_svg:not([class*='size-'])]:size-4"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*  MO 기초만 */}
        <div className={'container mx-auto block md:hidden pb-10'}>
          <div className="relative py-1 px-2 w-fit mx-auto">
            <span className="absolute w-[10px] h-[10px] border-t-3  border-l-3 border-primary left-0 top-0"></span>
            <span className="absolute w-[10px] h-[10px] border-b-3  border-r-3 border-primary right-0 bottom-0"></span>
            <p className="font-bold text-white text-lg leading-relaxed">
              <span className="text-primary text-xl">기초</span>만 잡아도 내{' '}
              <span className="text-primary text-xl">수익률</span>이 달라집니다.
            </p>
          </div>
          <p className={'text-white font-semibold text-center'}>
            &quot;수수료 페이백도 받고, <br />
            선물거래 스터디 자료도 받아가세요&quot;
          </p>
          <div className={'relative my-5'}>
            <div className="w-50 h-50 mx-auto bg-[radial-gradient(circle,_#17181C_0%,_#6B6F82_40%,_#17181C_70%)]"></div>
            <Image src={futuresBookPC} width={190} alt={'futuresBookMO'}
                   className={'absolute top-0 bottom-0 left-0 right-0 m-auto z-10'} />
            <Image src={BookIcon01} alt={'BookIcon01'} className={'absolute bottom-3 right-0'} />
            <Image src={BookIcon02} alt={'BookIcon02'} className={'absolute bottom-3 left-0'} />
          </div>
          <Link href={user ? '/uidlink' : '/login'}>
            <Button
              className="flex gap-2  h-fit has-[>svg]:px-8 px-5 py-2 rounded-3xl font-semibold text-lg mx-auto items-center">
              <span>지금 무료로 받기</span>
              <ArrowBottomIcon
                width={14}
                color="white"
                className="rotate-270 [&_svg:not([class*='size-'])]:size-4"
              />
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-[linear-gradient(to_bottom,_#17181C_0%,_#3B3B3B_45%,_#787878_76%,_#FFFFFF_100%)]">
        <div className="container mx-auto" ref={containerRef}>
          <div className="flex gap-2 md:gap-3 justify-center pt-4 pb-5 md:pb-10 text-center">
            <div className="border-2 border-primary"></div>
            <p className="text-white md:text-2xl text-xl font-bold">
              테더베이스 회원 분들이 매매에만 집중할 수 있도록
            </p>
            <div className="border-2 border-primary"></div>
          </div>

          {/* PC balloon */}
          <div className="grid-cols-2 justify-center pb-5 md:pb-10 hidden md:grid">
            <div className="flex flex-col gap-5 pt-7 md:pt-17">
              <div className="balloon" data-order="2">
                <Image src={balloon02} alt="내가 낸 수수료 되돌려 받고 싶어요."  />
              </div>
              <div className="balloon" data-order="4">
                <Image src={balloon04} alt="숙련자들을 위한 심화 교육도 해주세요."  />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="balloon" data-order="1">
                <Image src={balloon01} alt="선물거래하는 방법 알려주세요."  />
              </div>
              <div className="balloon" data-order="3">
                <Image src={balloon03} alt="초보도 수익을 낼 수 있는 방법 궁금해요."  />
              </div>

            </div>
          </div>

          {/* MO balloon */}
          <div className="grid grid-cols-1 gap-5 pt-7 md:pt-17 pb-5 md:pb-10 md:hidden">
            <div className="pl-25 balloon w-full" data-order="1">
              <Image src={balloon01} alt="선물거래하는 방법 알려주세요." />
            </div>
            <div className="pr-25 balloon" data-order="2">
              <Image src={balloon02} alt="내가 낸 수수료 되돌려 받고 싶어요." />
            </div>
            <div className="pl-25 balloon" data-order="3">
              <Image src={balloon03} alt="초보도 수익을 낼 수 있는 방법 궁금해요." />
            </div>
            <div className="pr-25 balloon" data-order="4">
              <Image src={balloon04} alt="숙련자들을 위한 심화 교육도 해주세요." />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div
            className={
              'flex flex-col text-center items-center gap-3 mt-10 mb-5'
            }
          >
            <span
              className={
                'w-fit text-white bg-primary rounded-4xl text-lg md:text-2xl font-bold py-1 px-5 md:px-8'
              }
            >
              참여방법
            </span>
            <div>
              <p className={'font-semibold text-lg md:text-xl'}>
                누구나 쉽게 따라할 수 있는 ‘3단계’
              </p>
              <p className={'text-[#17181c] md:text-base text-sm'}>
                간단한 방법으로 선물거래 가이드 얻자!
              </p>
            </div>
          </div>
          <div className={'grid grid-cols-1 gap-y-10 md:grid-cols-3'}>
            <div className={'flex flex-col items-center gap-3'}>
              <span
                className={
                  'w-fit py-1 px-6 bg-[#17181C] text-primary text-lg md:text-xl font-semibold rounded-3xl'
                }
              >
                1 단계
              </span>
              <Image src={futuresPhone01} alt={'futuresPhone01'} />
              <p className={'font-semibold text-base md:text-lg'}>
                테더베이스 가입하기
              </p>
            </div>
            <div className={'flex flex-col items-center gap-3'}>
              <span
                className={
                  'w-fit py-1 px-6 bg-[#17181C] text-primary text-lg md:text-xl font-semibold rounded-3xl'
                }
              >
                2 단계
              </span>
              <Image src={futuresPhone02} alt={'futuresPhone02'} />
              <div className={'text-center'}>
                <p className={'font-semibold text-base md:text-lg'}>
                  거래소 연동하기
                </p>
                <p className={'md:text-base text-sm'}>*UID 등록</p>
              </div>
            </div>
            <div className={'flex flex-col items-center gap-3'}>
              <span
                className={
                  'w-fit py-1 px-6 bg-[#17181C] text-primary text-lg md:text-xl font-semibold rounded-3xl'
                }
              >
                3 단계
              </span>
              <Image src={futuresPhone03} alt={'futuresPhone03'} />
              <p className={'font-semibold text-base md:text-lg'}>
                텔레그램 CS 채널에서 신청
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <Link
            href={user ? '/uidlink' :'/signup'}
            className="mx-auto flex items-center justify-center max-w-[450px] border-[3px] border-[#FF6A00] rounded-xl py-2 gap-2 my-10 md:my-20 bg-white shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
          >
            <LogoIcon className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
            <p className="text-base md:text-xl font-semibold text-[#3A1E1E]">
              지금 가입하고 전자책 + 리워드 받아가기!
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FuturesPage;
