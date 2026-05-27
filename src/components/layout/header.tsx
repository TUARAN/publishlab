"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, Sun, Moon, LogOut, User, ChevronDown } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "首页", href: "/" },
  { label: "功能", href: "/features" },
  { label: "协作", href: "/collaboration" },
  { label: "电子书", href: "/ebook" },
  { label: "变现", href: "/monetize" },
  { label: "调研", href: "/research" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : theme === "light" ? "dark" : "light");
  };

  // Close user menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const user = status === "authenticated" ? session?.user : null;
  const isLoggedIn = !!user;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <span className="text-2xl">✍️</span>
          <span>PublishLab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="切换主题"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {isLoggedIn ? (
            /* User Menu */
            <div ref={userMenuRef} className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt=""
                    className="h-7 w-7 rounded-full"
                  />
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {(user.name?.[0] || user.email?.[0] || "U").toUpperCase()}
                  </div>
                )}
                <span className="hidden text-sm font-medium text-foreground md:inline">
                  {user.name || user.email?.split("@")[0]}
                </span>
                <ChevronDown size={14} className="hidden text-muted-foreground md:inline" />
              </button>

              {/* Dropdown */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card p-1.5 shadow-lg">
                  <div className="border-b border-border px-3 py-2.5">
                    <div className="text-sm font-medium text-foreground">
                      {user.name || "用户"}
                    </div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </div>
                  <div className="mt-1.5 space-y-0.5">
                    <Link
                      href="/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <User size={15} />
                      个人中心
                    </Link>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        signOut({ callbackUrl: "/" });
                      }}
                      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-red-500 transition-colors hover:bg-red-500/10"
                    >
                      <LogOut size={15} />
                      退出登录
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Login / Signup */
            <>
              <Link
                href="/login"
                className="hidden rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
              >
                登录
              </Link>
              <Link
                href="/signup"
                className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 md:inline-block"
              >
                免费开始
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-muted-foreground md:hidden"
            aria-label="打开菜单"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <hr className="my-2 border-border" />
          {isLoggedIn ? (
            <div className="px-4 pb-2">
              <div className="mb-3 flex items-center gap-3">
                {user.image ? (
                  <img src={user.image} alt="" className="h-8 w-8 rounded-full" />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {(user.name?.[0] || "U").toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-foreground">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-500/30 py-2 text-sm font-medium text-red-500"
              >
                <LogOut size={15} />
                退出登录
              </button>
            </div>
          ) : (
            <div className="flex gap-2 px-4 pb-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-lg border border-border py-2 text-center text-sm font-medium text-foreground"
              >
                登录
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-lg bg-primary py-2 text-center text-sm font-medium text-primary-foreground"
              >
                免费开始
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
