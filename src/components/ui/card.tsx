import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200",
        hover && "hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
