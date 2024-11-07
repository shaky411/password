import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from "./opengraph-image.png";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import FirstVisitPopup from "./Components/firstVisitPopup";
import GoogleAnalytics from "./utils/googleAnalytics";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Random Password Generator | Secure and Free Password Tool"
  },
  alternates: {
    canonical: "https://www.passwordmanager.org.uk",
  },
  keywords: "password generator, secure password generator, free password generator, online security tool, data protection, internet safety, Next.js password generator",
  openGraph: {
    title: "Create Secure Passwords with Our Free Password Generator",
    description: "Try our free online password generator for secure and random passwords to protect your accounts. Simple and user-friendly.",
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
  description: "Generate secure, random passwords with ease. Free online password generator tool for improved web safety and data protection.",
  metadataBase: new URL("https://www.passwordmanager.org.uk"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noarchive: true,
      noimageindex: true,
      nositelinkssearchbox: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebApplication",
              "name": "Random Password Generator",
              "url": "https://www.passwordmanager.org.uk",
              "description": "Generate secure passwords with this free online tool.",
              "applicationCategory": "Utility",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP",
                "category": "Free",
              },
              "provider": {
                "@type": "Organization",
                "name": "Graygecko",
                "url": "https://www.graygecko.co.uk",
              },
              "creator": {
                "@type": "Person",
                "name": "Marc Norris",
                "url": "https://www.passwordmanager.org.uk/#contact"
              }
            }),
          }}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-6386565516888254"
          async
        />
        <GoogleAnalytics />
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

{/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebApplication",
              "name": "Random Password Generator",
              "url": "https://www.passwordmanager.org.uk",
              "description": "Generate secure passwords with this free online tool.",
              "applicationCategory": "Utility",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "category": "Free",
              },
              "provider": {
                "@type": "Organization",
                "name": "Your Brand Name",
                "url": "https://www.passwordmanager.org.uk",
              },
            }),
          }}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-6386565516888254"
          async
        /> */}