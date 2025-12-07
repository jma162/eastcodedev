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
          "@type": "LocalBusiness",
          "@id": "https://eastcodedev.com/#organization",
          "name": "EastCodeDev",
          "alternateName": "East Code Development",
          "url": "https://eastcodedev.com",
          "logo": "https://eastcodedev.com/next.svg",
          "description": "EastCodeDev专业网站设计公司，提供费城、纽约及周边地区网站设计开发服务。网站设计、网页设计、企业官网设计、电商网站设计。14天快速上线，SEO优化，让客户在Google快速找到您的企业。",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": ["Pennsylvania", "New York", "New Jersey"],
            "addressLocality": ["Philadelphia", "New York City"]
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-215-934-1280",
              "contactType": "customer service",
              "availableLanguage": ["Chinese", "English"],
              "areaServed": ["US", "PA", "NY", "NJ"]
            },
            {
              "@type": "ContactPoint",
              "email": "info@eastcodedev.com",
              "contactType": "customer service",
              "availableLanguage": ["Chinese", "English"],
              "areaServed": ["US", "PA", "NY", "NJ"]
            }
          ],
          "sameAs": [
            "https://eastcodedev.com"
          ],
          "areaServed": [
            {
              "@type": "City",
              "name": "Philadelphia",
              "sameAs": "https://en.wikipedia.org/wiki/Philadelphia"
            },
            {
              "@type": "City",
              "name": "New York",
              "sameAs": "https://en.wikipedia.org/wiki/New_York_City"
            },
            {
              "@type": "State",
              "name": "Pennsylvania",
              "sameAs": "https://en.wikipedia.org/wiki/Pennsylvania"
            },
            {
              "@type": "State",
              "name": "New York",
              "sameAs": "https://en.wikipedia.org/wiki/New_York_(state)"
            },
            {
              "@type": "State",
              "name": "New Jersey",
              "sameAs": "https://en.wikipedia.org/wiki/New_Jersey"
            }
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7128,
            "longitude": -74.0060
          },
          "priceRange": "$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "geoRadius": {
              "@type": "Distance",
              "name": "Philadelphia, New York, and surrounding areas"
            }
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EastCodeDev - 专业网站设计公司",
          "alternateName": "EastCodeDev Professional Web Design Company",
          "url": "https://eastcodedev.com",
          "description": "EastCodeDev专业网站设计公司，提供费城、纽约及周边地区网站设计开发服务。网站设计、网页设计、企业官网设计、电商网站设计。14天快速上线，SEO优化，让客户在Google快速找到您的企业。",
          "publisher": {
            "@type": "Organization",
            "name": "EastCodeDev",
            "url": "https://eastcodedev.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://eastcodedev.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "网站设计服务",
          "alternateName": "Web Design Services",
          "description": "EastCodeDev专业网站设计公司，提供费城、纽约及周边地区网站设计服务。包括网站设计、网页设计、企业官网设计、电商网站设计、移动应用开发、餐厅订餐系统、美容美发预约等专业服务。SEO优化，让客户在Google快速找到您的企业。",
          "provider": {
            "@type": "Organization",
            "name": "EastCodeDev",
            "url": "https://eastcodedev.com"
          },
          "serviceType": "Web Design and Development",
          "areaServed": [
            {
              "@type": "City",
              "name": "Philadelphia",
              "sameAs": "https://en.wikipedia.org/wiki/Philadelphia"
            },
            {
              "@type": "City",
              "name": "New York",
              "sameAs": "https://en.wikipedia.org/wiki/New_York_City"
            },
            {
              "@type": "State",
              "name": "Pennsylvania"
            },
            {
              "@type": "State",
              "name": "New York"
            },
            {
              "@type": "State",
              "name": "New Jersey"
            },
            {
              "@type": "Country",
              "name": "United States"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "网站设计开发服务目录",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "企业官网设计",
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
          "description": "联系EastCodeDev获取专业的网站设计开发服务。电话：215-934-1280，邮箱：info@eastcodedev.com，微信扫码咨询。",
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
                "email": "info@eastcodedev.com",
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
