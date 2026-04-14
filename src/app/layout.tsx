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

export const metadata: Metadata = {
  title: "Devashish Sharma | Frontend Engineer",
  description:
    "Frontend Engineer portfolio showcasing React.js, Next.js, TypeScript, performance optimization, and production-grade web applications.",
  keywords: [
    "Frontend Engineer",
    "React.js Developer",
    "Next.js Portfolio",
    "TypeScript",
    "JavaScript",
    "Devashish Sharma",
  ],
  openGraph: {
    title: "Devashish Sharma | Frontend Engineer",
    description:
      "Portfolio of Devashish Sharma featuring frontend projects, experience, and technical strengths.",
    url: "https://example.com",
    siteName: "Devashish Portfolio",
    type: "website",
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
