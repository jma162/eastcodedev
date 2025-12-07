import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 - EastCodeDev专业网站设计开发服务",
  description: "联系EastCodeDev获取专业的网站设计开发服务。电话：215-934-1280，邮箱：info@eastcodedev.com，微信扫码咨询。专业团队为您提供免费咨询和项目报价。",
  keywords: [
    "联系我们",
    "EastCodeDev联系方式",
    "网站设计咨询",
    "免费咨询",
    "项目报价",
    "电话咨询",
    "微信咨询"
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "联系我们 - EastCodeDev专业网站设计开发服务",
    description: "联系EastCodeDev获取专业的网站设计开发服务。电话：215-934-1280，邮箱：info@eastcodedev.com，微信扫码咨询。",
    url: 'https://eastcodedev.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

