import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CHATAI } from "./projects-data";

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("nz-label flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-6 bg-border" />
      {children}
    </p>
  );
}

export function ProjectStatus({ label = CHATAI.status }: { label?: string }) {
  return (
    <span className="nz-label inline-flex items-center gap-2 text-foreground/70">
      <span aria-hidden className="relative flex h-1.5 w-1.5">
        <span className="absolute inset-0 rounded-full bg-violet" />
        <span className="absolute inset-0 rounded-full bg-violet/60 blur-[3px]" />
      </span>
      {label}
    </span>
  );
}

export function ProjectNumber({
  children = CHATAI.number,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <span className={cn("nz-label text-foreground", className)}>{children}</span>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="nz-label rounded-md border border-border px-2.5 py-1 text-foreground/60">
      {children}
    </span>
  );
}

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "nz-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        className,
      )}
    />
  );
}

export function Glow({
  className,
  tone = "violet",
}: {
  className?: string;
  tone?: "violet" | "azure";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-2xl",
        tone === "violet" ? "nz-glow-violet" : "nz-glow-azure",
        className,
      )}
    />
  );
}

export function Section({
  id,
  children,
  className,
  ariaLabel,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("relative border-t border-border px-5 py-24 sm:px-8 md:py-32", className)}
    >
      <div className="nz-container">{children}</div>
    </section>
  );
}

export function FinalCtaSection({
  children,
  ariaLabel,
  className,
}: {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 md:py-36",
        className,
      )}
    >
      <div className="nz-container relative">{children}</div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "rise",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "rise" | "fade";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.nzRevealed === "1") return;

    el.style.animationDelay = `${delay}ms`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.nzRevealed = "1";
      el.classList.add("nz-io-shown");
      return;
    }

    const reveal = () => {
      if (el.dataset.nzRevealed === "1" || !el.isConnected) return;
      el.dataset.nzRevealed = "1";
      el.classList.add("nz-io-shown");
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    // Always observe — content starts hidden via CSS, so no flash on route change
    io.observe(el);

    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        variant === "fade" ? "nz-scroll-fade" : "nz-scroll-rise",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function NZMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-md border border-border bg-surface font-mono text-[0.7rem] font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      N0
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "nz-pressable inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-border bg-transparent text-foreground hover:border-violet/60 hover:bg-surface",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TextLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
