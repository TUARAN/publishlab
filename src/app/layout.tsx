import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SessionProvider } from "@/components/layout/session-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PublishLab - 写作变现平台",
    template: "%s | PublishLab",
  },
  description:
    "把写作变成收入。PublishLab 提供从选题、写作到发布和变现的完整工作流，帮助创作者更快跑通第一笔收入。",
  openGraph: {
    type: "website",
    siteName: "PublishLab",
    title: "PublishLab - 写作变现平台",
    description:
      "把写作变成收入。PublishLab 提供从选题、写作到发布和变现的完整工作流，帮助创作者更快跑通第一笔收入。",
  },
  twitter: {
    card: "summary_large_image",
    title: "PublishLab - 写作变现平台",
    description:
      "把写作变成收入。PublishLab 提供从选题、写作到发布和变现的完整工作流，帮助创作者更快跑通第一笔收入。",
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
