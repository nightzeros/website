import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function CodeWindow({
  title,
  children,
  className,
  toolbar,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  toolbar?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-3 border-b border-border bg-surface-2/60 px-4 py-2.5">
        <span aria-hidden className="flex shrink-0 gap-1.5">
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-violet/50" />
        </span>
        <span className="nz-label truncate">{title}</span>
        {toolbar ? <div className="ml-auto shrink-0">{toolbar}</div> : null}
      </div>
      {children}
    </div>
  );
}

export function CodeBlock({
  code,
  prompt,
  className,
}: {
  code: string;
  prompt?: boolean;
  className?: string;
}) {
  return (
    <pre
      className={cn(
        "overflow-x-auto px-4 py-4 font-mono text-[0.8125rem] leading-relaxed text-foreground/85",
        className,
      )}
    >
      <code>
        {prompt ? <span className="mr-2 select-none text-violet">$</span> : null}
        {code}
      </code>
    </pre>
  );
}
