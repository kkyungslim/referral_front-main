import NextTopLoader from 'nextjs-toploader';
import localFont from 'next/font/local';
import './globals.css';
import 'swiper/css';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const pretendard = localFont({ src: '../assets/PretendardVariable.woff2' });
export const metadata: Metadata = {
  title: '테더베이스 - 최고의 셀퍼럴 페이백 플랫폼',
  description:
    '테더베이스에서 셀퍼럴로 거래하고 최대 페이백을 받으세요. Bitget, Gate, BingX 등 제휴 거래소 이벤트 제공.',
  keywords: [
    '테더베이스',
    'Tetherbase',
    '셀퍼럴',
    '셀퍼럴 거래소',
    '셀퍼럴 페이백',
    '페이백 거래소',
    '거래소 이벤트',
    '비트겟 이벤트',
    '게이트 이벤트',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/icon.png',
      },
    ],
  },
  openGraph: {
    title: '테더베이스 - 최고의 셀퍼럴 페이백 플랫폼',
    description:
      '셀퍼럴 기반으로 Bitget, Gate, BingX 등 다양한 거래소의 이벤트와 수수료 페이백 제공!',
    url: 'https://tetherbase.io',
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
  verification: {
    google: 'QT1g6o094F9SSL4-rE23PlY8DookiBihMaZC6Fdk9pg',
  },
  other: {
    'naver-site-verification': '67719e394e32c5fb2e3d005fac8f86f48985ffea',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
        <NextTopLoader color="#ff6900" showSpinner={false} height={2} />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
