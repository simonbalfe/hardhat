export const SITE_TITLE = "Hard Hat Growth | Lead Generation for Roofing Businesses";
export const SITE_DESCRIPTION =
  "We help roofing businesses generate high-quality leads, book qualified appointments, and close more jobs with our proven lead generation and appointment setting system.";

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: "%s | Hard Hat Growth",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Roofing Leads",
    "Lead Generation",
    "Roofing Marketing",
    "Appointment Setting",
    "Roofing Business Growth",
    "Google Ads for Roofers",
    "Facebook Ads for Roofers",
    "Roofing Contractors",
  ],
  authors: [{ name: "Hard Hat Growth" }],
  creator: "Hard Hat Growth",
  publisher: "Hard Hat Growth",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Hard Hat Growth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hard Hat Growth - Lead Generation for Roofing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@hardhatgrowth",
  },
};
