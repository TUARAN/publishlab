import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-16 sm:px-6 sm:py-24 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-12", center && "text-center")}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
