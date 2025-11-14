/**
 * 结构化数据组件 - JSON-LD格式
 * 帮助Google更好地理解网站内容和显示富媒体搜索结果
 */

import { siteConfig } from "@/lib/site-config";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 网站整体信息
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": "AI-powered text-to-animation generator",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteConfig.url}/?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      // 组织信息
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}${siteConfig.logo}`,
          "width": 512,
          "height": 512
        },
        "sameAs": [
          siteConfig.social.twitter,
          siteConfig.social.github
        ]
      },
      // 网页信息
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        "url": siteConfig.url,
        "name": siteConfig.title,
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`
        },
        "about": {
          "@id": `${siteConfig.url}/#organization`
        },
        "description": siteConfig.description,
        "inLanguage": "en-US"
      },
      // 软件应用信息
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#softwareapplication`,
        "name": siteConfig.name,
        "operatingSystem": "Web Browser",
        "applicationCategory": "MultimediaApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "AI-powered animation generation",
          "Text-to-animation conversion",
          "Browser-based operation",
          "No registration required",
          "Instant results"
        ]
      },
      // FAQ结构化数据
      {
        "@type": "FAQPage",
        "@id": "https://riftrunner.online/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is RiftRunner really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! RiftRunner is completely free to use. No hidden fees, no subscriptions, just unlimited animation generation."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to create an account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No account needed! Simply describe your animation and let our AI do the magic."
            }
          },
          {
            "@type": "Question",
            "name": "What formats can I export?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can export animations in MP4, GIF, and WebM formats, optimized for different platforms."
            }
          },
          {
            "@type": "Question",
            "name": "How long does generation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most animations are ready in 30-60 seconds, depending on complexity."
            }
          }
        ]
      },
      // 面包屑导航
      {
        "@type": "BreadcrumbList",
        "@id": "https://riftrunner.online/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://riftrunner.online"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
