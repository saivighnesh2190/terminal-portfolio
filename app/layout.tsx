import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "N. Sai Vighnesh | Terminal Portfolio",
  description:
    "Interactive terminal portfolio of N. Sai Vighnesh — Full Stack Developer & AI Engineer. Type 'help' to explore. Powered by Gemini AI.",
  keywords: [
    "Vighnesh",
    "N. Sai Vighnesh",
    "Full Stack Developer",
    "AI Engineer",
    "Terminal Portfolio",
    "KL University",
    "React",
    "Next.js",
    "Spring Boot",
    "Gemini AI",
  ],
  authors: [{ name: "N. Sai Vighnesh", url: "https://github.com/saivighnesh2190" }],
  creator: "N. Sai Vighnesh",
  publisher: "N. Sai Vighnesh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vighnesh-terminal.vercel.app",
    title: "N. Sai Vighnesh | Terminal Portfolio",
    description:
      "Interactive terminal portfolio with AI integration. Full Stack Developer & AI Engineer.",
    siteName: "VighneshOS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VighneshOS Terminal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N. Sai Vighnesh | Terminal Portfolio",
    description:
      "Interactive terminal portfolio with AI integration. Type 'help' to explore.",
    images: ["/og-image.png"],
    creator: "@vighnesh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/fonts/JetBrainsMono-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased bg-terminal-bg overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
