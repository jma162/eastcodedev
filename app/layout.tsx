import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PerformanceOptimization from "./components/PerformanceOptimization";

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
    default: "EastCodeDev - 专业网站设计开发服务 | 北美地区网站建设",
    template: "%s | EastCodeDev - 专业网站设计开发服务"
  },
  description: "EastCodeDev提供专业的网站设计开发服务，包括企业官网、电商平台、移动应用开发。北美地区专业团队，14天快速上线，质量保证。联系电话：215-934-1280",
  keywords: [
    "网站设计",
    "网站开发", 
    "网页设计",
    "企业网站",
    "电商网站",
    "移动应用开发",
    "北美网站设计",
    "专业网站建设",
    "网站优化",
    "SEO优化",
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
    canonical: '/',
    languages: {
      'zh-CN': '/zh',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://eastcodedev.com',
    siteName: 'EastCodeDev',
    title: 'EastCodeDev - 专业网站设计开发服务 | 北美地区网站建设',
    description: 'EastCodeDev提供专业的网站设计开发服务，包括企业官网、电商平台、移动应用开发。北美地区专业团队，14天快速上线，质量保证。',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'EastCodeDev - 专业网站设计开发服务',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EastCodeDev - 专业网站设计开发服务',
    description: 'EastCodeDev提供专业的网站设计开发服务，包括企业官网、电商平台、移动应用开发。',
    images: ['/logo.jpg'],
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
        <PerformanceOptimization />
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
