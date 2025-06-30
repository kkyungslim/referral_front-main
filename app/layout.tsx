import NextTopLoader from 'nextjs-toploader';
import localFont from 'next/font/local';
import './globals.css';
import 'swiper/css';
import Footer from '@/components/Footer';

const pretendard = localFont({ src: '../assets/PretendardVariable.woff2' });

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
