import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dcreativestudio.example"),
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
    "AI images for business"
  ],
  openGraph: {
    title: "D Creative Studio | AI Creative Agency for Small Businesses",
    description:
      "Premium AI-generated images for products, clothing with models, Instagram ads, and business campaigns.",
    url: "https://dcreativestudio.example",
    siteName: "D Creative Studio",
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 416,
        alt: "D Creative Studio logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "D Creative Studio | AI Creative Agency",
    description:
      "AI product images, fashion model visuals, and ad creatives for Instagram-first businesses."
  },
  alternates: {
    canonical: "/"
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
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
