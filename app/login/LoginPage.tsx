/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { APIlogin, APIloginCode } from '@/lib/API';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BIgLogo from '@/components/icons/BIgLogo';
import Link from 'next/link';
import LogoIcon from '@/components/icons/LogoIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import { useCaptcha } from '@/lib/hooks/useCaptcha';
import {
  emailCodeValidator,
  emailValidator,
  passwordValidator,
} from '@/lib/utils';

function LoginPage({ email: inputEmail }: { email?: string }) {
  const router = useRouter();

  const { setOnCaptchaSuccess, showCaptcha } = useCaptcha();
  const [email, setEmail] = useState(inputEmail ?? '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [waitingEmailVerification, setWaitingEmailVerification] =
    useState(false);

  const [emailCode, setEmailCode] = useState('');

  const [seconds, setSeconds] = useState(60);

  // code는 입력받는 순간 state에 들어가지 않고 이 함수가 바로 불리므로 code를 외부에서 받아온다
  const onEmailVerificationSubmit = (code: string) => {
    setOnCaptchaSuccess((captchaRes) => {
      APIloginCode({
        email,
        password,
        code,
        captcha: captchaRes,
      })
        .then((user) => {
          if (user) {
            router.push('/');
          } else {
            console.error(user);
            alert('이메일 인증에 실패했습니다.');
            setEmailCode('');
          }
        })
        .catch((err) => {
          console.error(err);
          alert('이메일 인증에 실패했습니다.');
          setEmailCode('');
        });
    });

    showCaptcha();
  };

  const loginPossible = emailValidator(email) && passwordValidator(password);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    APIlogin({ email: email, password })
      .then((valid) => {
        if (valid) {
          setWaitingEmailVerification(valid);
        } else {
          alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
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
    setWaitingEmailVerification(true); // 이메일 인증 대기 상태로 돌아감
  };

  return (
    <section className="w-full ">
      <div id="captcha">
        <div className="captcha"></div>
      </div>
      <div className="container mx-auto py-30">
        <div className={'max-w-[500px] mx-auto'}>
          <div className={'flex justify-center'}>
            <BIgLogo width={150} height={112} />
          </div>
          <form onSubmit={onSubmit}>
            <div className={'my-10'}>
              <div className={'mb-4'}>
                <Input
                  className={'h-11 font-semibold'}
                  focusOnRender
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value.trim());
                  }}
                  type="email"
                  placeholder="이메일"
                  validator={emailValidator}
                  errorMessage="이메일 형식이 올바르지 않습니다."
                />
              </div>
              <div>
                <Input
                  className={'h-11 font-semibold'}
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value.trim());
                  }}
                  placeholder="비밀번호"
                  // validator={(value) => value.length >= 8}
                  validator={passwordValidator}
                  errorMessage="비밀번호는 한 자리 이상이어야 합니다."
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div id="captcha"></div>
            </div>

            <Button
              className="w-full h-11 text-md rounded-4xl"
              loading={loading}
              type="submit"
              disabled={!loginPossible}
            >
              로그인
            </Button>
          </form>
          <ul className={'flex justify-center items-center my-10'}>
            <li>
              <Link
                href={'/signup'}
                className={'font-bold text-md text-front2'}
              >
                회원가입
              </Link>
            </li>
            <li className={'mx-3'}>
              <span
                className={
                  'inline-block w-[2px] h-[19px] bg-front3 align-middle'
                }
              ></span>
            </li>
            <li>
              <Link
                href={'/resetpassword'}
                className={'font-bold text-md text-front2'}
              >
                비밀번호 찾기
              </Link>
            </li>
          </ul>
          <div className={'bg-bg1 py-4 px-2 rounded-xl flex justify-center'}>
            <div className={'flex items-center gap-2'}>
              <LogoIcon width={40} height={40} />
              <div>
                <p className={'font-bold text-front2 md:text-base text-sm'}>
                  거래소와 <span className={'text-primary'}>공식 계약</span>을
                  맺은 테더베이스
                </p>
                <p className={'md:text-sm text-xs text-front2'}>
                  매번 빠져나가는
                  <span className={'text-primary'}>거래 수수료</span> 되돌려
                  받으세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {waitingEmailVerification && (
          <Fragment>
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

                    setEmailCode(''); // 인증번호 입력 필드를 초기화

                    // 이메일+비번로그인의 로딩을 해제해준다.
                    setLoading(false);
                  }}
                >
                  <CloseIcon width={20} height={20} color={'#111'} />
                </div>
                <p className={'text-xl font-bold mb-2'}>
                  인증번호 6자리를 입력해주세요.
                </p>
                <p className={'font-bold text-front2 text-lg'}>{email}</p>
                <div className={'my-10'}>
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
                    // onValidationSuccess={(value) =>
                    //   console.log('Valid 6-digit code:', value)
                    // }
                    // onValidationError={(value) => console.log('Invalid 6-digit code:', value)}
                  />
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
          </Fragment>
        )}
      </div>
    </section>
  );
}

export default LoginPage;
