import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const ogImagePath = "/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Devashish Sharma | Frontend Developer",
  description:
    "Frontend Developer portfolio showcasing modern, scalable web applications built with Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Frontend Developer",
    "Frontend Portfolio",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Devashish Sharma",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Devashish Sharma | Frontend Developer",
    description:
      "Portfolio of Devashish Sharma featuring production-ready frontend projects, experience, and technical strengths.",
    url: siteUrl,
    siteName: "Devashish Portfolio",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Devashish Sharma - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devashish Sharma | Frontend Developer",
    description:
      "Frontend Developer portfolio showcasing work with Next.js, React, TypeScript, and Tailwind CSS.",
    images: [ogImagePath],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
