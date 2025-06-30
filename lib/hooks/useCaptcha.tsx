// 다른 프로젝트에서 사용하려면
// - Layout.tsx 에 <head>에 <script>가 있는지 확인.
// - public/gt4.js파일도 다운로드받아져있는지 확인.
// - .env파일에 NEXT_PUBLIC_GEETEST_ID 있는지 확인
// <div id="captcha"></div>

import { useEffect, useRef, useState } from 'react';
import ENV_PUBLIC from '../ENV_PUBLIC';
import { loadGeetestScript } from '@/lib/loadGeetestScript';

export const useCaptcha = (componentId = 'captcha') => {
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const captchaRef = useRef<any>(undefined);
  const onCaptchaSuccess = useRef<(captchaRes: any) => void>(() => {});
  const setOnCaptchaSuccess = (func: (captchaRes: any) => void) => {
    onCaptchaSuccess.current = func;
  };

  const captchaConfig = {
    captchaId: ENV_PUBLIC.NEXT_PUBLIC_GEETEST_ID,
    language: 'eng',
    product: 'bind',
    protocol: 'https://',
  };

  useEffect(() => {
    loadGeetestScript()
      .then((initGeetest4) => {
        initGeetest4!(captchaConfig, (captchaObj: any) => {
          captchaObj
            .appendTo(`#${componentId}`)
            .onReady(() => {
              captchaRef.current = captchaObj;
              setCaptchaLoaded(true);
            })
            .onNextReady(() => {})
            .onBoxShow(() => {})
            .onError((e: any) => {
              console.log('Geetest error:', e);
            })
            .onSuccess(() => {
              const captchaRes = captchaRef.current.getValidate();
              onCaptchaSuccess.current?.(captchaRes);
            });
        });
      })
      .catch((err) => {
        console.error('Failed to load Geetest:', err);
      });
  }, []);

  return {
    captchaLoaded,
    showCaptcha: () => {
      captchaRef.current?.showCaptcha();
    },
    captchaRef,
    setOnCaptchaSuccess,
  };
};
