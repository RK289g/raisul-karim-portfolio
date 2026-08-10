import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import Navbar from "@/components/layout/navbar/NavBar";
import { PORTFOLIO_COLOR_SCHEME_STORAGE_KEY } from "@/config/MantineProvider";
import Providers from "./Providers";
import { inter, plusJakarta } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: "Raisul Karim Saju",
  description:
    "Computer Science graduate with research experience in blockchain and cryptography and professional experience in web development. Interested in scalable systems and AI-driven platforms.",

  keywords: [
    "Raisul Karim Saju",
    "Software Developer",
    "Web Developer",
    "Computer Science",
    "Blockchain",
    "Cryptography",
    "Next.js",
    "React",
    "TypeScript",
    "Machine Learning",
    "Portfolio",
  ],

  authors: [{ name: "Raisul Karim Saju" }],
  creator: "Raisul Karim Saju",

  openGraph: {
    title: "Raisul Karim Saju — Portfolio",
    description:
      "Explore projects, publications, experience, and technical work by Raisul Karim Saju.",
    url: "https://your-domain.com",
    siteName: "Raisul Karim Saju Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raisul Karim Saju Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raisul Karim Saju — Portfolio",
    description:
      "Explore projects, publications, experience, and technical work by Raisul Karim Saju.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/assets/SR_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript
          defaultColorScheme="auto"
          localStorageKey={PORTFOLIO_COLOR_SCHEME_STORAGE_KEY}
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
