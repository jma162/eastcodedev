import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - EastCodeDev专业网站设计团队",
  description: "了解EastCodeDev专业网站设计团队，我们拥有丰富的网页设计和开发经验，致力于为客户提供创新的数字解决方案。专业团队，优质服务。",
  keywords: [
    "关于我们",
    "EastCodeDev团队",
    "网站设计团队",
    "网页开发团队",
    "专业团队",
    "优质服务",
    "数字解决方案"
  ],
  alternates: {
    canonical: 'https://eastcodedev.com/about',
  },
  openGraph: {
    title: "关于我们 - EastCodeDev专业网站设计团队",
    description: "了解EastCodeDev专业网站设计团队，我们拥有丰富的网页设计和开发经验，致力于为客户提供创新的数字解决方案。",
    url: 'https://eastcodedev.com/about',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

