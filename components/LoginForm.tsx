'use client';

import { Fragment, useState } from 'react';
import { Input } from './ui/input';
import { APIlogin, APIloginCode } from '@/lib/API';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function EmailCodeVerifier({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const router = useRouter();
  const [emailCode, setEmailCode] = useState('');
  const [loading, setLoading] = useState(false);

  const onEmailVerificationSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setLoading(true);
    APIloginCode({
      email,
      password,
      code: emailCode,
    })
      .then((user) => {
        if (user) {
          router.push('/');
        } else {
          alert('이메일 인증에 실패했습니다.');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={onEmailVerificationSubmit}>
      <Input
        type="number"
        value={emailCode}
        onChange={(e) => {
          let value = e.target.value.trim();
          if (value.length > 6) {
            value = value.slice(0, 6);
          }

          if (value.length === 6) {
            onEmailVerificationSubmit();
          }

          setEmailCode(value);
        }}
        placeholder="Enter 6-digit code"
        validator={(value: string) => /^\d{6}$/.test(value)}
        // errorMessage="Please enter a valid 6-digit number."
        onValidationSuccess={(value) =>
          console.log('Valid 6-digit code:', value)
        }
        // onValidationError={(value) => console.log('Invalid 6-digit code:', value)}
      />
      {loading ? '로딩 중...' : ''}
    </form>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [waitingEmailVerification, setWaitingEmailVerification] =
    useState(false);

  const [emailSubmittable, setEmailSubmittable] = useState(false);
  const [passwordSubmittable, setPasswordSubmittable] = useState(false);

  const loginPossible = emailSubmittable && passwordSubmittable;

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

  return (
    <Fragment>
      {!waitingEmailVerification ? (
        <form onSubmit={onSubmit}>
          이메일
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.trim());
            }}
            type="email"
            placeholder="email@tetherbase.com"
            validator={(value) => /^\S+@\S+\.\S+$/.test(value)}
            errorMessage="이메일 형식이 올바르지 않습니다."
            onValidationSuccess={() => setEmailSubmittable(true)}
            onValidationError={() => setEmailSubmittable(false)}
          />
          비밀번호
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.trim());
            }}
            placeholder="비밀번호 (1자리 이상)"
            // validator={(value) => value.length >= 8}
            validator={(value) => value.length >= 1}
            errorMessage="비밀번호는 한 자리 이상이어야 합니다."
            onValidationSuccess={() => setPasswordSubmittable(true)}
            onValidationError={() => setPasswordSubmittable(false)}
          />
          <Button
            className="w-[80px]"
            loading={loading}
            type="submit"
            disabled={!loginPossible}
          >
            로그인
          </Button>
        </form>
      ) : (
        <EmailCodeVerifier email={email} password={password} />
      )}
    </Fragment>
  );
}

export default LoginForm;
