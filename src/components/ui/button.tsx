import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "border border-primary text-primary hover:bg-primary/10",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
