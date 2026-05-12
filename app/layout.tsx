import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700", "800", "900"],
});

const siteUrl = "https://dcreativestudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "D Creative Studio | AI Creative Agency for Product Images & Ad Creatives",
    template: "%s | D Creative Studio"
  },
  description:
    "D Creative Studio creates AI-generated product images, clothing model visuals, Instagram creatives, and ad designs for small businesses, product brands, and online sellers.",
  keywords: [
    "AI creative agency",
    "AI product photography",
    "AI generated product images",
    "AI fashion model images",
    "Instagram ad creatives",
    "small business ad creatives",
    "AI images for business",
    "ecommerce product visuals",
    "clothing brand creatives",
    "AI model photography"
  ],
  authors: [{ name: "D Creative Studio", url: siteUrl }],
  creator: "D Creative Studio",
  publisher: "D Creative Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "D Creative Studio | AI Creative Agency for Small Businesses",
    description:
      "Premium AI-generated images for products, clothing with models, Instagram ads, and business campaigns.",
    url: siteUrl,
    siteName: "D Creative Studio",
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 416,
        alt: "D Creative Studio – AI Creative Agency"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "D Creative Studio | AI Creative Agency",
    description:
      "AI product images, fashion model visuals, and ad creatives for Instagram-first businesses.",
    images: ["/logo.png"]
  },
  alternates: {
    canonical: siteUrl
  },
  category: "business"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "D Creative Studio",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "D Creative Studio is an AI creative agency producing product images, clothing model visuals, Instagram ad creatives, and campaign designs for small businesses and online sellers.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English"]
  },
  offers: {
    "@type": "AggregateOffer",
    description:
      "AI-generated product photography, fashion model creatives, Instagram ad designs, and ecommerce visuals."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
