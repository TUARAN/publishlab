import Link from "next/link";

const footerLinks = {
  产品: [
    { label: "AI 写作助手", href: "/features" },
    { label: "协作编辑", href: "/collaboration" },
    { label: "电子书工具", href: "/ebook" },
    { label: "定价", href: "/pricing" },
  ],
  资源: [
    { label: "帮助中心", href: "#" },
    { label: "API 文档", href: "#" },
    { label: "开发者社区", href: "#" },
    { label: "博客", href: "#" },
  ],
  公司: [
    { label: "关于我们", href: "#" },
    { label: "联系我们", href: "#" },
    { label: "招聘", href: "#" },
  ],
  法律: [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "Cookie 政策", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
              <span className="text-xl">✍️</span>
              <span>PublishLab</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              AI 驱动的写作、内容创作与数字出版平台
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 PublishLab. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "GitHub", "Discord"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
