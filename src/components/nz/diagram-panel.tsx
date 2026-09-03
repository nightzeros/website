import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Glow } from "./primitives";

export type FlowNode = {
  label: string;
  meta: string;
  accent?: boolean;
};

export function DiagramPanel({
  title,
  subtitle,
  nodes,
  footer,
  className,
}: {
  title: string;
  subtitle?: string;
  nodes: FlowNode[];
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-surface p-6 sm:p-8",
        className,
      )}
    >
      <Glow className="-right-16 -top-16 size-64 opacity-70" />
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <span className="nz-label">{title}</span>
        {subtitle ? <span className="nz-label">{subtitle}</span> : null}
      </div>
      <ol className="relative mt-8 space-y-3">
        {nodes.map((node, i) => (
          <li key={`${node.label}-${node.meta}`}>
            <div
              className={cn(
                "nz-surface-hover flex items-center justify-between gap-3 rounded-lg border px-4 py-3.5",
                node.accent
                  ? "border-violet/50 bg-violet/[0.07]"
                  : "border-border bg-surface-2/70 hover:border-violet/50",
              )}
            >
              <span className="text-sm font-medium">{node.label}</span>
              <span className="nz-label shrink-0">{node.meta}</span>
            </div>
            {i < nodes.length - 1 ? (
              <div aria-hidden className="flex justify-center py-1">
                <svg width="2" height="18" viewBox="0 0 2 18" className="text-violet/70">
                  <line
                    className="nz-flow"
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      {footer ? (
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5">{footer}</div>
      ) : null}
    </div>
  );
}
