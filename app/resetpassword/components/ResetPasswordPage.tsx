'use client';
import { Input } from '@/components/ui/input';
import { CaptchaRes, DefaultProps } from '@/lib/types';
import React, { Fragment, useEffect, useState } from 'react';
import CloseIcon from '@/components/icons/CloseIcon';
import { Button } from '@/components/ui/button';
import {
  APIPrepareResetPassword,
  APIResetPassword,
  APIValidateResetPassword,
} from '@/lib/API';
import { useCaptcha } from '@/lib/hooks/useCaptcha';
import { emailValidator, strictPasswordValidator } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

function ResetPasswordPage({ user }: DefaultProps) {
  const router = useRouter();
  const { showCaptcha, setOnCaptchaSuccess } = useCaptcha();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [waitingEmailVerification, setWaitingEmailVerification] =
    useState(false);

  const [emailVerified, setEmailVerified] = useState(false);

  const [emailCode, setEmailCode] = useState('');

  const [seconds, setSeconds] = useState(60);

  const [passToken, setPassToken] = useState('');

  const resetCountdown = () => {
    setSeconds(60);
    setWaitingEmailVerification(true); // 이메일 인증 대기 상태로 돌아감
  };

  function sendEmailVerify() {
    if (!emailValidator(email)) {
      alert('올바른 이메일을 입력해주세요.');
      return;
    }
    APIPrepareResetPassword(email).then((res) => {
      if (res?.success === 'success' && res.data) {
        setWaitingEmailVerification(true);
      } else {
        alert(res.errors[0].message);
      }
    });
  }

  setOnCaptchaSuccess(async (captchaRes: CaptchaRes) => {
    APIValidateResetPassword(email, emailCode, captchaRes).then((res) => {
      console.log(res);
      if (res?.success === 'success' && res.data) {
        setPassToken(captchaRes.pass_token);
        setEmailVerified(true);
        setWaitingEmailVerification(false);
      } else {
        alert(res.errors[0].message);
      }
    });
  });
  // 카운트다운이 60초로 초기화되거나, waitingEmailVerification 상태가 true일 때만 카운트다운 시작
  useEffect(() => {
    if (waitingEmailVerification && seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer); // 클린업
    }
  }, [waitingEmailVerification, seconds]); // waitingEmailVerification이 변경될 때마다 실행
  function resetPassword() {
    if (strictPasswordValidator(password)) {
      APIResetPassword(email, password, passToken).then((res) => {
        if (res?.success === 'success' && res.data) {
          alert('비밀번호 변경이 완료되었습니다.');
          router.push('/login');
        } else {
          alert(res.errors[0].message);
        }
      });
    } else {
      alert('비밀번호 규약을 확인해주세요.');
    }
  }

  return (
    <section>
      <div className="container mx-auto py-20 md:py-40">
        <h2 className={'text-center mb-10'}>비밀번호 찾기</h2>
        <div className={'w-full md:w-1/2 mx-auto'}>
          <div className={'flex flex-col gap-8'}>
            <div>
              <Label>이메일</Label>
              <div className={'flex items-start'}>
                <div className={'w-full'}>
                  <Input
                    focusOnRender
                    className={
                      'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                    }
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value.trim());
                    }}
                    type="email"
                    placeholder="이메일"
                    validator={(value) => /^\S+@\S+\.\S+$/.test(value)}
                    errorMessage="이메일 형식이 올바르지 않습니다."
                    disabled={emailVerified}
                  />
                </div>
                <Button
                  type={'button'}
                  disabled={!/^\S+@\S+\.\S+$/.test(email) || emailVerified}
                  onClick={sendEmailVerify}
                >
                  인증
                </Button>
              </div>
            </div>
            {emailVerified && (
              <>
                <div className={'flex justify-center gap-2'}>
                  <Label>비밀번호 입력</Label>
                  <div className={'flex-1'}>
                    <Input
                      className={
                        'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                      }
                      placeholder={'비밀번호 입력'}
                      type="password"
                      value={password}
                      validator={strictPasswordValidator}
                      errorMessage="비밀번호 형식이 올바르지 않습니다."
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className={'flex justify-center gap-2'}>
                  <Label>비밀번호 확인</Label>
                  <div className={'flex-1'}>
                    <Input
                      className={
                        'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                      }
                      placeholder={'비밀번호 확인'}
                      type="password"
                      value={passwordConfirm}
                      validator={(value) => value === password}
                      errorMessage="비밀번호가 일치하지 않습니다."
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          {emailVerified && (
            <Button
              className={'w-full mt-15 h-fit text-lg'}
              onClick={resetPassword}
            >
              변경하기
            </Button>
          )}
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
                  // setWaitingEmailVerification(!waitingEmailVerification);

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

                    // if (value.length === 6) {
                    //   onEmailVerificationSubmit(value);
                    // }

                    setEmailCode(value);
                  }}
                  placeholder="인증번호 6자리를 입력해주세요."
                  validator={(value: string) => /^\d{6}$/.test(value)}
                  errorMessage=""
                  onValidationSuccess={(value) => {
                    // console.log('Valid 6-digit code:', value)
                    showCaptcha();
                  }}
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
                <Button onClick={() => resetCountdown()}>다시 보내기</Button>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
}

export default ResetPasswordPage;
