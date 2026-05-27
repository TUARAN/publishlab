import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SessionProvider } from "@/components/layout/session-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PublishLab - AI 写作与数字出版平台",
    template: "%s | PublishLab",
  },
  description:
    "用 AI 释放创作力。PublishLab 提供智能写作、实时协作和一键出版工具，助你从灵感到出版。",
  openGraph: {
    type: "website",
    siteName: "PublishLab",
    title: "PublishLab - AI 写作与数字出版平台",
    description:
      "用 AI 释放创作力。PublishLab 提供智能写作、实时协作和一键出版工具，助你从灵感到出版。",
  },
  twitter: {
    card: "summary_large_image",
    title: "PublishLab - AI 写作与数字出版平台",
    description:
      "用 AI 释放创作力。PublishLab 提供智能写作、实时协作和一键出版工具，助你从灵感到出版。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Theme bootstrap — must run before hydration to avoid FOUC.
            Next.js 16 requires inline scripts to use next/script. */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=document.documentElement;d.classList.remove("light","dark");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){d.classList.add("dark")}else{d.classList.add("light")}}catch(e){}})()`,
          }}
        />
        <SessionProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
