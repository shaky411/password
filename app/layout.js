import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Password Generator"
  },
  alternates: {
    canonical: "https://www.passwordmanager.org.uk"
  },
  keywords: "password generator, passwords, password, create password, secure, security, free, free tool",
  openGraph: {
    title: "Free to use Password Generator",
    description: "Simple password generator created with NextJS and styled using TailwindCSS"
  },
  twitter: {
    card: "summary_large_image"
  },
  description:
    "This is a free to use password generator, enjoy",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
