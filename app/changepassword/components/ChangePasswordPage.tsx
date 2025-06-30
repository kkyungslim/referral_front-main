'use client';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { strictPasswordValidator } from "@/lib/utils";
import { APIResetPasswordOnLogin } from "@/lib/API";
import { useRouter } from "next/navigation";

function ChangePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState(''); // 현재 비밀번호
  const [newPassword, setNewPassword] = useState(''); // 새로운 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(''); // 새로운 비밀번호 확인
  
  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (strictPasswordValidator(password) && strictPasswordValidator(newPassword) && newPassword === confirmPassword) {
      APIResetPasswordOnLogin({originalPassword: password, newPassword})
        .then((res) => {
          if (res === undefined) {
            alert('통신에 오류가 발생했습니다.');
            return;
          }
          if (res.success === 'success' && res.data) {
            alert('변경되었습니다.');
            router.push('/');
          } else {
            if (res.success === 'fail') {
              alert(res.errors ? res.errors[0].message : '실패했습니다. 관리자에게 문의해주세요.');
            } else {
              alert('서버 오류 발생. 관리자에게 문의하세요.');
            }
          }
        })
    } else {
      alert('비밀번호를 확인하세요.')
    }
  }
  
  return (
    <section>
      <div className="container mx-auto py-20">
        <h2 className={'text-center mb-10'}>비밀번호 재설정</h2>
        <div className={'w-full md:w-1/2 mx-auto'}>
          <form onSubmit={handleSubmit}>
            <div className={'flex flex-col gap-8'}>
              <div className={''}>
                <Label htmlFor={'password'}>현재 비밀번호</Label>
                <div className={'flex-1'}>
                  <Input
                    focusOnRender
                    className={
                      'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                    }
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value.trim());
                    }}
                    type="password"
                    validator={strictPasswordValidator}
                    errorMessage="올바르지 않은 비밀번호 입니다."
                    placeholder="현재 비밀번호"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor={'password'}>새로운 비밀번호</Label>
                <div className={'flex justify-center gap-2'}>
                  <div className={'flex-1'}>
                    <Input
                      className={
                        'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                      }
                      placeholder={'새로운 비밀번호 입력'}
                      type="password"
                      value={newPassword}
                      validator={strictPasswordValidator}
                      errorMessage="비밀번호 형식이 올바르지 않습니다."
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor={'password'}>새로운 비밀번호 확인</Label>
                <div className={'flex justify-center gap-2'}>
                  <div className={'flex-1'}>
                    <Input
                      className={
                        'h-10 border-t-0 border-l-0 border-r-0 border-b-2 shadow-none rounded-none font-semibold pl-0 pb-0 text-md '
                      }
                      placeholder={'새로운 비밀번호 확인'}
                      type="password"
                      value={confirmPassword}
                      validator={(value) => value === newPassword}
                      errorMessage="비밀번호가 일치하지 않습니다."
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button disabled={!(strictPasswordValidator(password) && strictPasswordValidator(newPassword) && newPassword === confirmPassword)} className={'w-full mt-15 h-fit text-lg'}>변경하기</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ChangePasswordPage;
