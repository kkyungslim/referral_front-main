/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { APIregister, APIregisterCode } from '@/lib/API';
import { DefaultProps } from '@/lib/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LogoIcon from '@/components/icons/LogoIcon';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import CloseIcon from '@/components/icons/CloseIcon';
import {
  emailCodeValidator,
  emailValidator,
  passwordValidator,
  strictPasswordValidator,
} from '@/lib/utils';
import { useCaptcha } from '@/lib/hooks/useCaptcha';
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
import { ScrollArea } from '@/components/ui/scroll-area';
import TermsOfService from '@/components/TermsOfService';
import PrivacyPolicy from '@/components/PrivacyPolicy';

function RegisterPage({ user }: DefaultProps) {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const router = useRouter();
  const { setOnCaptchaSuccess, showCaptcha } = useCaptcha();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [waitingEmailVerification, setWaitingEmailVerification] =
    useState(false);

  const [emailCode, setEmailCode] = useState('');

  const [seconds, setSeconds] = useState(60);
  const [isChecked, setIsChecked] = useState(false); // 체크박스 상태
  const registerPossible =
    emailValidator(email) && strictPasswordValidator(password) && isChecked;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    APIregister({ email: email, password })
      .then((valid) => {
        if (!valid) {
          throw '회원가입에 실패했습니다. 잠시 후 다시 시도해주세요. (500)';
        }
        setWaitingEmailVerification(valid);
      })
      .catch((err: { message: string }) => {
        // console.error(err);
        alert(
          err.message ??
            '회원가입에 실패했습니다. 잠시 후 다시 시도해주세요. (Unknown)',
        );
        setLoading(false);
      });
  };

  const onEmailVerificationSubmit = (code: string) => {
    setOnCaptchaSuccess((captchaRes) => {
      APIregisterCode({
        email,
        password,
        code,
        captcha: captchaRes,
      })
        .then((user) => {
          if (user) {
            alert('회원가입이 완료되었습니다. 로그인해주세요.');
            router.push('/login?email=' + email);
          } else {
            console.error(user);
            alert('이메일 인증에 실패했습니다.');
            setEmailCode('');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    });

    showCaptcha();
  };

  // 카운트다운이 60초로 초기화되거나, waitingEmailVerification 상태가 true일 때만 카운트다운 시작
  useEffect(() => {
    if (waitingEmailVerification && seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer); // 클린업
    }
  }, [waitingEmailVerification, seconds]); // waitingEmailVerification이 변경될 때마다 실행

  // "다시 보내기" 버튼 클릭 시 카운트다운 리셋
  const resetCountdown = () => {
    setSeconds(60);
  };

  // 가입하기 버튼 활성화 조건
  const isFormValid = email && password && isChecked;

  return (
    <section>
      <div className="container mx-auto">
        <div className="max-w-[500px] w-full m-auto py-30">
          <div className={'flex justify-between flex-wrap-reverse'}>
            <div>
              <h3 className={'font-bold text-2xl mb-2'}>
                <span className={'text-primary'}>테더베이스</span>
                <br />
                선물 거래 수수료 페이백
              </h3>
              <p className={'text-front2'}>
                테더베이스는 거래소에서 발생한 수수료를
                <br />
                트레이더님들께 직접 환급해주는 페이백 서비스를 제공합니다.
              </p>
            </div>
            <div className={'mb-5'}>
              <LogoIcon width={60} height={60} />
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className={'my-15 flex flex-col gap-8'}>
              <div>
                <label className={'font-bold'}>이메일</label>
                <Input
                  className={
                    'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                  }
                  focusOnRender
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value.trim());
                  }}
                  type="email"
                  placeholder="이메일"
                  validator={emailValidator}
                  errorMessage="이메일 형식이 올바르지 않습니다."
                  // onValidationSuccess={() => setEmailSubmittable(true)}
                  // onValidationError={() => setEmailSubmittable(false)}
                />
              </div>
              <div>
                <label className={'font-bold'}>비밀번호</label>
                <Input
                  className={
                    'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                  }
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value.trim());
                  }}
                  placeholder="비밀번호"
                  // validator={(value) => value.length >= 8}
                  validator={strictPasswordValidator}
                  errorMessage="비밀번호는 8-16자이며 영문 대소문자/숫자/특수기호를 포함해야 합니다."
                  // onValidationSuccess={() => setPasswordSubmittable(true)}
                  // onValidationError={() => setPasswordSubmittable(false)}
                />
              </div>
            </div>
            <div className={'border border-primary rounded-xl py-4 px-10'}>
              <div className={'flex items-center gap-5'}>
                <Checkbox
                  id="terms"
                  className={'size-5'}
                  checked={isChecked}
                  onClick={() => setIsChecked(!isChecked)} // 체크박스 상태 변경
                />
                <label
                  htmlFor="terms"
                  className={'text-sm text-front2 font-semibold'}
                >
                  테더베이스의{' '}
                  <span
                    className={
                      'text-primary underline font-semibold text-sm cursor-pointer'
                    }
                    onClick={() => setOpenTerms(!openTerms)}
                  >
                    이용약관
                  </span>{' '}
                  및{' '}
                  <span
                    className={
                      'text-primary underline font-semibold text-sm cursor-pointer'
                    }
                    onClick={() => setOpenPrivacy(!openPrivacy)}
                  >
                    개인정보 보호 정책
                  </span>
                  을 읽고 동의합니다.
                </label>
              </div>
              <div
                className={
                  'flex items-center text-sm text-front2 font-semibold'
                }
              >
                <Dialog open={openTerms} onOpenChange={setOpenTerms}>
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
                </Dialog>
                <Dialog open={openPrivacy} onOpenChange={setOpenPrivacy}>
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
                </Dialog>
              </div>
            </div>
            <p className={'text-front2 text-center my-10'}>
              이미 계정이 있으신가요?{' '}
              <Link href={'/login'} className={'text-primary underline'}>
                로그인
              </Link>
            </p>
            <div>
              <Button
                className="h-14 text-lg rounded-2xl w-full"
                loading={loading}
                type="submit"
                disabled={!registerPossible} // 필수 항목이 채워지지 않으면 버튼 비활성화
              >
                가입하기
              </Button>
            </div>
          </form>
        </div>
        {waitingEmailVerification && (
          <div className={'fixed top-0 bottom-0 left-0 right-0'}>
            <div
              className={'absolute top-0 bottom-0 left-0 right-0 bg-black/50'}
            ></div>
            <div
              className={
                'max-w-[500px] h-fit w-full absolute top-0 bottom-0 left-0 right-0 m-auto z-10 bg-white rounded-2xl p-10'
              }
            >
              <div
                className={'absolute top-10 right-10 cursor-pointer'}
                onClick={() => {
                  setWaitingEmailVerification(!waitingEmailVerification);
                  setLoading(false);
                }}
              >
                <CloseIcon width={20} height={20} color={'#111'} />
              </div>
              <p className={'text-xl font-bold mb-2'}>
                인증번호 6자리를 입력해주세요.
              </p>
              <div className={'my-5'}>
                <Input
                  className={
                    'h-11 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none border-b-primary font-semibold pl-0 pb-0 text-lg '
                  }
                  type="number"
                  value={emailCode}
                  onChange={(e) => {
                    let value = e.target.value.trim();
                    if (value.length > 6) {
                      value = value.slice(0, 6);
                    }

                    if (value === emailCode) {
                      // 6자 이상에서 숫자를 임의로 계속 눌러서 여러 번 요청되는 것을 막는다
                      return;
                    }

                    if (value.length === 6) {
                      onEmailVerificationSubmit(value);
                    }

                    setEmailCode(value);
                  }}
                  placeholder="인증번호 6자리를 입력해주세요."
                  validator={emailCodeValidator}
                  errorMessage=""
                ></Input>
              </div>
              {seconds != 0 ? (
                <p className={'font-bold text-front2'}>
                  인증번호가 오지 않았다면,
                  <br /> <span className={'text-primary'}>
                    {seconds}초
                  </span>{' '}
                  뒤에 다시보내기 버튼을 눌러주세요.
                </p>
              ) : (
                <Button
                  onClick={() => {
                    resetCountdown();
                    setEmailCode('');
                  }}
                >
                  다시 보내기
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RegisterPage;
