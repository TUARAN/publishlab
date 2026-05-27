"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Share2,
  Link as LinkIcon,
  Printer,
  Check,
  FileText,
  Image as ImageIcon,
  Code2,
  Loader2,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// useLayoutEffect emits a warning during SSR — fall back to useEffect there
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface ShareExportBarProps {
  title: string;
  description?: string;
  markdown?: string;
  pngTarget?: string;
  filename?: string;
  className?: string;
}

type Busy = null | "png" | "html";

export function ShareExportBar({
  title,
  description,
  markdown,
  pngTarget = "main",
  filename = "publishlab-export",
  className,
}: ShareExportBarProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState<Busy>(null);
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Mark client-mounted (portal target only exists in browser)
  useEffect(() => setMounted(true), []);

  // Compute menu position relative to trigger, on open + on scroll/resize
  useIsoLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const update = () => {
      const r = triggerRef.current!.getBoundingClientRect();
      const MENU_W = 224;
      const MARGIN = 8;
      let left = r.right - MENU_W; // right-align with trigger
      if (left < MARGIN) left = MARGIN;
      const maxLeft = window.innerWidth - MENU_W - MARGIN;
      if (left > maxLeft) left = maxLeft;
      setPos({ top: r.bottom + 8, left });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t)) return;
      if (menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* ─── Actions ─────────────────────────────────────── */
  const copyLink = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = window.location.href;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const printPDF = () => {
    setOpen(false);
    setTimeout(() => window.print(), 50);
  };

  const downloadFile = (content: string | Blob, ext: string, mime: string) => {
    const blob =
      content instanceof Blob ? content : new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadMarkdown = () => {
    if (!markdown) return;
    downloadFile(markdown, "md", "text/markdown;charset=utf-8");
    setOpen(false);
  };

  const downloadPNG = async () => {
    if (typeof window === "undefined") return;
    setBusy("png");
    try {
      const { toPng } = await import("html-to-image");
      const node = document.querySelector(pngTarget) as HTMLElement | null;
      if (!node) {
        alert(`找不到截图目标:${pngTarget}`);
        return;
      }
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const dataUrl = await toPng(node, {
        pixelRatio,
        cacheBust: true,
        backgroundColor:
          getComputedStyle(document.body).backgroundColor || "#ffffff",
        width: node.offsetWidth,
        height: node.scrollHeight,
        style: { height: `${node.scrollHeight}px` },
        filter: (el) => {
          if (!(el instanceof HTMLElement)) return true;
          if (el.dataset?.exportSkip === "true") return false;
          if (el.tagName === "HEADER" || el.tagName === "FOOTER") return false;
          return true;
        },
      });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      downloadFile(blob, "png", "image/png");
    } catch (e) {
      console.error(e);
      alert("生成长图失败,请检查浏览器控制台");
    } finally {
      setBusy(null);
      setOpen(false);
    }
  };

  const downloadHTML = async () => {
    if (!markdown) return;
    setBusy("html");
    try {
      const body = mdToHtml(markdown);
      const html = buildStandaloneHtml(title, description ?? "", body);
      downloadFile(html, "html", "text/html;charset=utf-8");
    } catch (e) {
      console.error(e);
      alert("生成 HTML 失败,请检查浏览器控制台");
    } finally {
      setBusy(null);
      setOpen(false);
    }
  };

  const nativeShare = async () => {
    if (typeof window === "undefined") return;
    const data = {
      title,
      text: description ?? title,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* user cancelled */
      }
    } else {
      copyLink();
    }
    setOpen(false);
  };

  /* ─── UI ──────────────────────────────────────────── */
  const menu =
    open && mounted && pos
      ? createPortal(
          <div
            ref={menuRef}
            role="menu"
            data-export-skip="true"
            style={{ top: pos.top, left: pos.left }}
            className="print:hidden fixed z-[100] w-56 overflow-hidden rounded-xl border border-border bg-card p-1.5 text-left shadow-lg"
          >
            <MenuItem onClick={copyLink}>
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  已复制链接
                </>
              ) : (
                <>
                  <LinkIcon size={14} />
                  复制链接
                </>
              )}
            </MenuItem>

            <MenuItem onClick={nativeShare}>
              <Share2 size={14} />
              系统分享…
            </MenuItem>

            <MenuDivider />

            <MenuItem onClick={printPDF}>
              <Printer size={14} />
              打印 / 导出 PDF
            </MenuItem>

            <MenuItem onClick={downloadPNG} disabled={busy === "png"}>
              {busy === "png" ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <ImageIcon size={14} />
              )}
              导出 PNG 长图
            </MenuItem>

            {markdown && (
              <>
                <MenuItem onClick={downloadHTML} disabled={busy === "html"}>
                  {busy === "html" ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Code2 size={14} />
                  )}
                  导出 HTML
                </MenuItem>
                <MenuItem onClick={downloadMarkdown}>
                  <FileText size={14} />
                  导出 Markdown
                </MenuItem>
              </>
            )}
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        ref={triggerRef}
        data-export-skip="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "print:hidden inline-flex h-12 items-center gap-2 rounded-lg border border-primary px-5 text-sm font-medium text-primary transition-colors hover:bg-primary/10",
          className
        )}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Share2 size={16} />
        分享 / 导出
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      {menu}
    </>
  );
}

/* ───────── Menu primitives ───────── */
function MenuItem({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted disabled:cursor-wait disabled:opacity-50"
    >
      {children}
    </button>
  );
}

function MenuDivider() {
  return <div className="my-1 h-px bg-border" />;
}

/* ───────── Markdown → HTML (minimal) ───────── */
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(s: string) {
  return escapeHtml(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );
}

function mdToHtml(md: string): string {
  const lines = md.split(/\r?\n/);
  const out: string[] = [];
  let i = 0;
  const paraBuf: string[] = [];

  const flushPara = () => {
    if (paraBuf.length === 0) return;
    out.push(`<p>${inline(paraBuf.join(" "))}</p>`);
    paraBuf.length = 0;
  };

  while (i < lines.length) {
    const line = lines[i];

    if (/^```/.test(line)) {
      flushPara();
      const code: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        code.push(lines[i]);
        i++;
      }
      i++;
      out.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^---+\s*$/.test(line)) {
      flushPara();
      out.push("<hr />");
      i++;
      continue;
    }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushPara();
      out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
      i++;
      continue;
    }

    if (
      /^\|.*\|\s*$/.test(line) &&
      i + 1 < lines.length &&
      /^\|\s*[-:|\s]+\|\s*$/.test(lines[i + 1])
    ) {
      flushPara();
      const header = line
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) {
        rows.push(
          lines[i]
            .trim()
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((c) => c.trim())
        );
        i++;
      }
      out.push("<table><thead><tr>");
      header.forEach((c) => out.push(`<th>${inline(c)}</th>`));
      out.push("</tr></thead><tbody>");
      rows.forEach((r) => {
        out.push("<tr>");
        r.forEach((c) => out.push(`<td>${inline(c)}</td>`));
        out.push("</tr>");
      });
      out.push("</tbody></table>");
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      flushPara();
      const ordered = /^\d+\.\s+/.test(line);
      const matcher = ordered ? /^\d+\.\s+(.*)$/ : /^[-*]\s+(.*)$/;
      const items: string[] = [];
      while (i < lines.length && matcher.test(lines[i])) {
        const m = lines[i].match(matcher);
        if (m) items.push(`<li>${inline(m[1])}</li>`);
        i++;
      }
      out.push(
        `<${ordered ? "ol" : "ul"}>${items.join("")}</${ordered ? "ol" : "ul"}>`
      );
      continue;
    }

    if (/^\s*$/.test(line)) {
      flushPara();
      i++;
      continue;
    }

    paraBuf.push(line);
    i++;
  }
  flushPara();
  return out.join("\n");
}

function buildStandaloneHtml(
  title: string,
  description: string,
  body: string
): string {
  const css = `
:root{--bg:#fff;--fg:#1a1a2e;--muted:#6b7280;--line:#e5e7eb;--code-bg:#f6f8fa;--accent:#4338ca}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--fg);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",Roboto,Helvetica,Arial,sans-serif;line-height:1.7;-webkit-font-smoothing:antialiased}
main{max-width:780px;margin:0 auto;padding:48px 24px 96px}
h1,h2,h3,h4{line-height:1.3;margin-top:1.8em;margin-bottom:.5em;font-weight:700}
h1{font-size:2rem;margin-top:0;border-bottom:2px solid var(--line);padding-bottom:.4em}
h2{font-size:1.5rem;padding-bottom:.2em;border-bottom:1px solid var(--line)}
h3{font-size:1.2rem;color:var(--accent)}
p{margin:.75em 0}
a{color:var(--accent);word-break:break-all}
ul,ol{padding-left:1.4em}
li{margin:.2em 0}
hr{border:none;border-top:1px solid var(--line);margin:2em 0}
code{background:var(--code-bg);padding:.15em .4em;border-radius:4px;font-size:.92em;font-family:"SF Mono",Consolas,Monaco,monospace}
pre{background:var(--code-bg);border-radius:8px;padding:1em;overflow-x:auto;font-size:.9em}
pre code{background:transparent;padding:0}
table{width:100%;border-collapse:collapse;margin:1em 0;font-size:.95em}
th,td{border:1px solid var(--line);padding:.55em .8em;text-align:left;vertical-align:top}
th{background:var(--code-bg);font-weight:600}
tr:nth-child(even) td{background:#fafbfc}
.footer{margin-top:4em;padding-top:1em;border-top:1px solid var(--line);font-size:.85em;color:var(--muted)}
@media print{main{max-width:100%;padding:0}a{color:var(--fg);text-decoration:none}a[href^="http"]::after{content:" ("attr(href)")";font-size:.8em;color:var(--muted)}}
`;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<style>${css}</style>
</head>
<body>
<main>
${body}
<div class="footer">来自 <a href="https://publishlab.example/">PublishLab</a> · AI 写作与数字出版平台 · 生成于 ${new Date().toLocaleDateString("zh-CN")}</div>
</main>
</body>
</html>`;
}
