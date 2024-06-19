import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from "./opengraph-image.png";
import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Password Generator",
  },
  alternates: {
    canonical: "https://www.passwordmanager.org.uk",
  },
  keywords:
    "password generator, passwords, password, create password, secure, security, free, free tool, secure password, open source, web safety, internet, internet safety, password suggestion generator, password suggestion, password github, github password",
  openGraph: {
    title: "Free to use Password Generator",
    description:
      "Simple password generator created with NextJS and styled using TailwindCSS",
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
      <body className={inter.className}>
        {children}
        {/* <SpeedInsights /> */}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
