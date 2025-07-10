import NextTopLoader from 'nextjs-toploader';
import localFont from 'next/font/local';
import './globals.css';
import 'swiper/css';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import FaceBookPixel from '@/components/FaceBookPixel';
import { Metadata } from 'next';

const pretendard = localFont({ src: '../assets/PretendardVariable.woff2' });

export const metadata: Metadata = {
  title: '테더베이스 - 최고의 셀퍼럴 페이백 플랫폼',
  description:
    '거래소 공식 계약을 통한 페이백이 가능한 테더베이스는 비트겟, OKX(오케이엑스) ,빙엑스, 게이트, 바이비트, HTX(후오비) 등을 통해 사용자 1인당 평균 환급액 86만원 등 높은 혜택을 기대할 수 있습니다.',
  keywords: [
    '셀퍼럴',
    '레퍼럴',
    '비트겟',
    '비트겟 수수료',
    '게이트 수수료',
    '페이백 플랫폼',
    '거래소 수수료 환급',
  ],
  openGraph: {
    title: '테더베이스 - 최고의 셀퍼럴 페이백 플랫폼',
    description:
      '셀퍼럴 기반으로 비트겟, 게이트, 빙엑스 등 다양한 거래소의 이벤트와 수수료 페이백 제공!',
    url: 'https://tetherbase.io',
    siteName: '테더베이스',
    images: [
      {
        url: 'https://tetherbase.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '테더베이스 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테더베이스 - 최고의 셀퍼럴 페이백 플랫폼',
    description:
      '비트겟, 게이트, 빙엑스 제휴 거래소의 수수료를 셀퍼럴로 페이백 받으세요.',
    images: ['https://tetherbase.io/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [{ rel: 'icon', url: '/icon.png' }],
  },
  verification: {
    google: 'QT1g6o094F9SSL4-rE23PlY8DookiBihMaZC6Fdk9pg',
    other: {
      'naver-site-verification': '0879f97f06f54f3ac4a28a4609c5dea03b6a3539',
    },
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Organization",
        name: "비트겟 정식 제휴된 유일 페이백 셀퍼럴 최대 수수료 환급지원",
        image: "/bitget.jpg",
        url: "https://tetherbase.io/partner/BitgetDetail",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Organization",
        name: "게이트 정식 제휴된 유일 페이백 셀퍼럴 최대 수수료 환급지원",
        image: "/gate.jpg",
        url: "https://tetherbase.io/partner/GateDetail",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Organization",
        name: "빙엑스 정식 제휴된 유일 페이백 셀퍼럴 최대 수수료 환급지원",
        image: "/bingx.jpg",
        url: "https://tetherbase.io/partner/BingXDetail",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Organization",
        name: "htx 정식 제휴된 유일 페이백 셀퍼럴 최대 수수료 환급지원",
        image: "/okx.jpg",
        url: "https://tetherbase.io/partner/HTXDetail",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Organization",
        name: "OKX 정식 제휴된 유일 페이백 셀퍼럴 최대 수수료 환급지원",
        image: "/okx.jpg",
        url: "https://tetherbase.io/partner/OKXDetail",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Organization",
        name: "바이비트 정식 제휴된 유일 페이백 셀퍼럴 최대 수수료 환급지원",
        image: "/bybit.jpg",
        url: "https://tetherbase.io/partner/BybitDetail",
      },
    },
  ],
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: '테더베이스',
            url: 'https://tetherbase.io',
            logo: '/og-image.jpg',
          }),
        }}
      />
      <Script
        id="naver-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                var wcs_add = {};
                wcs_add["wa"] = "12c3b79398b9170";
                var wcs_script = document.createElement("script");
                wcs_script.src = "//wcs.naver.net/wcslog.js";
                wcs_script.async = true;
                wcs_script.onload = function () {
                  if (window.wcs) {
                    wcs_do();
                  }
                };
                document.head.appendChild(wcs_script);
              })();
            `,
        }}
      />
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '721640497495619');
            fbq('track', 'PageView');
          `}
      </Script>
    </head>
    <body className={`${pretendard.className} antialiased`}>
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=721640497495619&ev=PageView&noscript=1"
      />
    </noscript>
    <NextTopLoader color="#ff6900" showSpinner={false} height={2} />
    <FaceBookPixel />
    {children}
    <Analytics />
    <Footer />
    </body>
    </html>
  );
}
