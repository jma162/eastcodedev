import Script from 'next/script';

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'contact' | 'breadcrumb';
  data?: BreadcrumbItem[];
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EastCodeDev",
          "alternateName": "East Code Development",
          "url": "https://eastcodedev.com",
          "logo": "https://eastcodedev.com/logo.jpg",
          "description": "EastCodeDev提供专业的网站设计开发服务，包括企业官网、电商平台、移动应用开发。北美地区专业团队，14天快速上线，质量保证。",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "North America"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-215-934-1280",
              "contactType": "customer service",
              "availableLanguage": ["Chinese", "English"]
            },
            {
              "@type": "ContactPoint",
              "email": "ecd061924@gmail.com",
              "contactType": "customer service",
              "availableLanguage": ["Chinese", "English"]
            }
          ],
          "sameAs": [
            "https://eastcodedev.com"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "geoRadius": "5000000"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EastCodeDev - 专业网站设计开发服务",
          "alternateName": "EastCodeDev Professional Web Design Services",
          "url": "https://eastcodedev.com",
          "description": "EastCodeDev提供专业的网站设计开发服务，包括企业官网、电商平台、移动应用开发。北美地区专业团队，14天快速上线，质量保证。",
          "publisher": {
            "@type": "Organization",
            "name": "EastCodeDev",
            "url": "https://eastcodedev.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://eastcodedev.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "网站设计开发服务",
          "alternateName": "Web Design and Development Services",
          "description": "EastCodeDev提供全面的数字解决方案，包括网站设计、移动应用开发、电商网站、餐厅订餐系统、美容美发预约等专业服务。",
          "provider": {
            "@type": "Organization",
            "name": "EastCodeDev",
            "url": "https://eastcodedev.com"
          },
          "serviceType": "Web Design and Development",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "网站设计开发服务目录",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "企业网站设计",
                  "description": "专业企业官网设计开发"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "电商网站开发",
                  "description": "在线购物平台开发"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "移动应用开发",
                  "description": "iOS和Android应用开发"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "餐厅订餐系统",
                  "description": "在线订餐和预约系统"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "美容美发预约",
                  "description": "美容美发预约系统"
                }
              }
            ]
          }
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "联系我们 - EastCodeDev",
          "description": "联系EastCodeDev获取专业的网站设计开发服务。电话：215-934-1280，邮箱：ecd061924@gmail.com，微信扫码咨询。",
          "mainEntity": {
            "@type": "Organization",
            "name": "EastCodeDev",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-215-934-1280",
                "contactType": "customer service",
                "availableLanguage": ["Chinese", "English"]
              },
              {
                "@type": "ContactPoint",
                "email": "ecd061924@gmail.com",
                "contactType": "customer service",
                "availableLanguage": ["Chinese", "English"]
              }
            ]
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data || []
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
