import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PerformanceOptimization from "./components/PerformanceOptimization";
import { EstimateProvider } from "./contexts/EstimateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "网站设计 | 费城纽约专业网站设计公司 | EastCodeDev",
    template: "%s | 网站设计 | EastCodeDev"
  },
  description: "专业网站设计服务，EastCodeDev提供费城、纽约及周边地区网站设计开发。网站设计、网页设计、企业官网设计、电商网站设计。14天快速上线，SEO优化，让客户在Google快速找到您的企业。联系电话：215-934-1280",
  keywords: [
    "网站设计",
    "网页设计",
    "网站设计公司",
    "专业网站设计",
    "企业网站设计",
    "公司网站设计",
    "网站设计服务",
    "费城网站设计",
    "纽约网站设计",
    "费城网站开发",
    "纽约网站开发",
    "费城纽约网站设计",
    "Philadelphia web design",
    "New York web design",
    "web design company",
    "professional web design",
    "费城网页设计",
    "纽约网页设计",
    "网站开发", 
    "企业官网",
    "电商网站",
    "移动应用开发",
    "费城网站建设",
    "纽约网站建设",
    "新泽西网站设计",
    "专业网站建设",
    "网站优化",
    "SEO优化",
    "Google搜索优化",
    "网站维护",
    "EastCodeDev"
  ],
  authors: [{ name: "EastCodeDev Team" }],
  creator: "EastCodeDev",
  publisher: "EastCodeDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eastcodedev.com'),
  alternates: {
    canonical: 'https://eastcodedev.com/',
  },
  other: {
    'geo.region': 'US-PA,US-NY,US-NJ',
    'geo.placename': 'Philadelphia, New York, New Jersey',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://eastcodedev.com',
    siteName: 'EastCodeDev',
    title: '网站设计 | 费城纽约专业网站设计公司 | EastCodeDev',
    description: '专业网站设计服务，EastCodeDev提供费城、纽约及周边地区网站设计开发。网站设计、网页设计、企业官网设计。14天快速上线，SEO优化。',
    images: [
      {
        url: '/next.svg',
        width: 1200,
        height: 630,
        alt: '网站设计 - EastCodeDev专业网站设计公司',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '网站设计 | 费城纽约专业网站设计公司 | EastCodeDev',
    description: '专业网站设计服务，EastCodeDev提供费城、纽约及周边地区网站设计开发。14天快速上线，SEO优化，让客户在Google快速找到您的企业。',
    images: ['/next.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // 需要替换为实际的验证码
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EstimateProvider>
          <PerformanceOptimization />
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </EstimateProvider>
      </body>
    </html>
  );
}
