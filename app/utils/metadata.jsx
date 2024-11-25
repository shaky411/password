import ogImage from "../opengraph-image.png"; // Adjust path as needed

const MetadataComponent = ({
  title = "Password Generator",
  description = "This is a simple, free to use password generator, enjoy",
  keywords = "password generator, passwords, password, create password, secure, security, free, free tool, secure password, open source, web safety, internet, internet safety, password suggestion generator, password suggestion, password github, github password, random password, random",
  canonicalUrl = "https://www.passwordmanager.org.uk",
  openGraphTitle = "Free to use Password Generator",
  openGraphDescription = "Simple password generator created with NextJS",
  openGraphImage = ogImage,
  openGraphType = "website",
  openGraphSiteName = "Password Generator",
  openGraphUrl = "https://www.passwordmanager.org.uk"
}) => ({
  title: {
    default: title,
  },
  alternates: {
    canonical: canonicalUrl,
  },
  keywords,
  openGraph: {
    title: openGraphTitle,
    description: openGraphDescription,
    type: openGraphType,
    site_name: openGraphSiteName,
    url: openGraphUrl,
    images: [
      {
        url: openGraphImage.src,
        width: openGraphImage.width,
        height: openGraphImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  description,
  metadataBase: new URL(canonicalUrl),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noarchive: false,
      noimageindex: false,
      nositelinkssearchbox: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
});

export default MetadataComponent;
