'use client';
import { DefaultProps } from '@/lib/types';
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon';
import { useRouter } from 'next/navigation';
import CustomerService from '@/components/icons/CustomerService';
import Lock from '@/components/icons/Lock';
import LogourIcon from '@/components/icons/LogourIcon';
import profileIcon from '@/assets/images/profileIcon.png';
import Image from 'next/image';
import { APIDeactivateAccount, APIlogout } from '@/lib/API';

function MyPagePage({ user }: DefaultProps) {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto py-17">
        <div className={'flex items-center gap-3 mb-10'}>
          <div className={'rounded-4xl'}>
            <Image src={profileIcon} width={50} height={50} alt={'Profile'} />
          </div>
          <div>
            <p className={'font-bold'}>{user?.email}</p>
            <p className={'text-front2 font-bold'}>회원번호: {user?.name}</p>
          </div>
        </div>
        <ul>
          <li
            className={
              'py-5  flex items-center justify-between border-b-2 cursor-pointer'
            }
            onClick={() => router.push('/changepassword')}
          >
            <div className={'flex items-center gap-2'}>
              <Lock width={30} height={30} />
              <p className={'text-lg font-bold'}>비밀번호 변경</p>
            </div>
            <ArrowBottomIcon width={15} height={15} className={'rotate-270'} />
          </li>
          <li
            className={
              'py-5  flex items-center justify-between border-b-2 cursor-pointer'
            }
            onClick={() => window.open('https://t.me/a0s2d3f4w1q', '_blank')}
          >
            <div className={'flex items-center gap-2'}>
              <CustomerService width={30} height={30} />
              <p className={'text-lg font-bold'}>고객센터</p>
            </div>
            <ArrowBottomIcon width={15} height={15} className={'rotate-270'} />
          </li>
          <li
            className={
              'py-5  flex items-center justify-between border-b-2 cursor-pointer'
            }
          >
            <div
              onClick={() => {
                if (confirm('로그아웃 하시겠습니까?')) {
                  APIlogout().then(() => {
                    router.push('/');
                  });
                }
              }}
              className={'flex items-center gap-2'}
            >
              <LogourIcon width={30} height={30} />
              <p className={'text-lg font-bold'}>로그아웃</p>
            </div>
            <ArrowBottomIcon
              width={15}
              height={15}
              className={'rotate-270 cursor-pointer'}
            />
          </li>
          <li
            className={
              'py-5  flex items-center justify-between border-b-2 cursor-pointer'
            }
            onClick={() => {
              if (
                confirm(
                  '회원탈퇴 하시겠습니까?\n테더베이스는 회원 탈퇴 후 같은 이메일, 같은 UID 로 재가입할 수 없습니다.\n\n그래도 진행하시겠습니까?',
                )
              ) {
                APIDeactivateAccount().then((res) => {
                  if (res === undefined) {
                    alert('통신에 문제가 발생했습니다. 관리자에게 문의하세요.');
                    return;
                  }
                  if (res.success === 'success') {
                    alert(
                      '회원탈퇴 되었습니다. 그동안 테더베이스를 이용해주셔서 감사합니다.',
                    );
                    APIlogout().then(() => {
                      router.push('/');
                    });
                  } else {
                    alert(res.errors[0].message);
                  }
                });
              }
            }}
          >
            <div className={'flex items-center gap-2'}>
              <div className="relative w-8 h-8">
                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-1 bg-primary rotate-45"></span>
                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-1 bg-primary -rotate-45"></span>
              </div>
              <p className={'text-lg font-bold'}>회원탈퇴</p>
            </div>
            <ArrowBottomIcon
              width={15}
              height={15}
              className={'rotate-270 cursor-pointer'}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MyPagePage;
