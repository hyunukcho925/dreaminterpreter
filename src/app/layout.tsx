import type { Metadata, Viewport } from "next";
import "./globals.css";
import ogImage from "@/assets/images/ogimage.webp";
import Script from 'next/script';

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
  width: 'device-width',
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dreaminterpreter.co.kr"),
  title: "꿈해몽 전문 | 꿈 해석 및 의미 분석 | Dream Interpreter",
  description:
    "무료 꿈 해몽 풀이! 꿈해몽 밥꿈, 뱀꿈, 강아지꿈, 똥꿈 해몽! 무료로 풀이해 드리는 꿈해몽을 통해 오늘 꾼 꿈을 해몽해 보세요. 꿈의 의미를 확인하고 길몽, 태몽 여부를 확인해 보세요.",
  authors: [{ name: "dreaminterpreter" }],
  publisher: "dreaminterpreter",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://dreaminterpreter.co.kr",
    title: "꿈 해몽 사이트 | 무료 꿈풀이 검색 | Dream Interpreter",
    description:
      "무료 꿈 해몽 풀이! 꿈해몽 밥꿈, 뱀꿈, 강아지꿈, 똥꿈 해몽! 무료로 풀이해 드리는 꿈해몽을 통해 오늘 꾼 꿈을 해몽해 보세요. 꿈의 의미를 확인하고 길몽, 태몽 여부를 확인해 보세요.",
    siteName: "Dream Interpreter",
    images: [
      {
        url: ogImage.src,
        width: 800,
        height: 400,
        alt: "꿈해몽 사이트",
        type: "image/webp",
      },
    ],
    locale: "ko_KR",
  },
  keywords: "꿈해몽,꿈 해석,꿈 의미,꿈 상징,심리 분석,꿈 통찰,꿈 이해",
  alternates: {
    canonical: "https://dreaminterpreter.co.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2852429641150112"
          crossOrigin="anonymous"
        ></script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dream Interpreter",
              url: "https://dreaminterpreter.co.kr",
              description: metadata.description,
              publisher: {
                "@type": "Organization",
                name: "Dream Interpreter",
              },
            }),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H6NJXDYRHV"
        />
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H6NJXDYRHV');
            `
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
