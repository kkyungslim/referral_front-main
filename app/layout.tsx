import NextTopLoader from 'nextjs-toploader';
import localFont from 'next/font/local';
import './globals.css';
import 'swiper/css';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

const pretendard = localFont({ src: '../assets/PretendardVariable.woff2' });

export const metadata: Metadata = {
  title: '이벤트 안내 - 테더베이스',
  description: 'Bitget, Gate 등 거래소 페이백 이벤트와 셀퍼럴 프로모션을 한눈에 확인하세요.',
  keywords: [
    '테더베이스',
    '셀퍼럴',
    '레퍼럴',
    '비트겟',
    '비트겟 수수료',
    '게이트 수수료',
    '페이백 플랫폼',
    '거래소 수수료 환급',
  ],
  openGraph: {
    title: '이벤트 안내 - 테더베이스',
    description: '최신 거래소 이벤트 및 셀퍼럴 페이백 정보 제공',
    url: 'https://tetherbase.io/event',
    siteName: '테더베이스',
    images: [
      {
        url: 'https://tetherbase.io/og-image.jpg',
        alt: '테더베이스 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이벤트 안내 - 테더베이스',
    description: '최신 거래소 이벤트 및 셀퍼럴 페이백 정보 제공',
    images: ['https://tetherbase.io/og-image.jpg'],
  },
};

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
    <head>
      {/* Schema.org 구조화 데이터 (텔레그램만 포함) */}
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
            logo: 'https://tetherbase.io/og-image.jpg',
          }),
        }}
      />
    </head>
    <body className={`${pretendard.className} antialiased`}>
    <NextTopLoader color="#ff6900" showSpinner={false} height={2} />
    {children}
    <Analytics />
    <Footer />
    </body>
    </html>
  );
}
