import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "我们的服务 - EastCodeDev专业网站设计开发服务",
  description: "EastCodeDev提供全面的数字解决方案，包括网站设计、移动应用开发、电商网站、餐厅订餐系统、美容美发预约等专业服务。多种行业模板，快速上线。",
  keywords: [
    "网站设计服务",
    "移动应用开发",
    "电商网站",
    "餐厅订餐系统",
    "美容美发预约",
    "网站模板",
    "数字解决方案",
    "专业服务"
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "我们的服务 - EastCodeDev专业网站设计开发服务",
    description: "EastCodeDev提供全面的数字解决方案，包括网站设计、移动应用开发、电商网站、餐厅订餐系统等专业服务。",
    url: 'https://eastcodedev.com/services',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

