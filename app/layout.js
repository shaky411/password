import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from "./opengraph-image.png";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Script from "next/script";
import FirstVisitPopup from "./Components/firstVisitPopup";
import ClientAnalytics from "./Components/clientAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Random Password Generator",
  },
  alternates: {
    canonical: "https://www.passwordmanager.org.uk",
  },
  keywords:
    "password generator, passwords, password, create password, secure, security, open source, github, free, free tool, secure password, open source, web safety, internet, internet safety, password suggestion generator, password suggestion, password github, github password, random password, random",
  openGraph: {
    title: "Free to use Password Generator",
    description: "Simple random password generator created with NextJS",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  description: "This is a simple, free to use password generator, enjoy",
  metadataBase: new URL("https://www.passwordmanager.org.uk"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6386565516888254" />
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-6386565516888254"
          async
        />
      </head>
      {/* <Navbar /> */}

      <body className={inter.className}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
        <FirstVisitPopup />
      </body>
    </html>
  );
}
