declare global {
  interface Window {
    initGeetest4?: (
      config: {
        captchaId: string;
        language?: string;
        product?: string;
        protocol?: string;
      },
      callback: (captchaObj: any) => void,
    ) => void;
  }
}

// lib/loadGeetestScript.ts
let geetestReady: Promise<typeof window.initGeetest4>;

export function loadGeetestScript(): Promise<typeof window.initGeetest4> {
  if (geetestReady) return geetestReady;

  geetestReady = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject('No window');

    if (window.initGeetest4) {
      return resolve(window.initGeetest4);
    }

    const script = document.createElement('script');
    script.src = '/gt4.js'; // or your CDN URL
    script.async = true;
    script.onload = () => {
      if (typeof window.initGeetest4 === 'function') {
        resolve(window.initGeetest4);
      } else {
        reject('initGeetest4 not found on window after script load');
      }
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return geetestReady;
}
