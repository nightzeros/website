import { ArrowRight, FileCode2, Folder } from "lucide-react";
import { ButtonLink, Glow, Reveal, Section, SectionLabel } from "./primitives";
import { LINKS } from "./links";

const TREE = [
  { depth: 0, name: "chatai", type: "dir" as const },
  { depth: 1, name: "apps/web", type: "dir" as const },
  { depth: 1, name: "packages/chatai-react", type: "dir" as const },
  { depth: 2, name: "chat-widget.tsx", type: "file" as const },
  { depth: 1, name: "packages/chatai-sdk", type: "dir" as const },
  { depth: 2, name: "client.ts", type: "file" as const },
  { depth: 1, name: "README.md", type: "file" as const },
  { depth: 1, name: "LICENSE", type: "file" as const },
];

export function OpenSourceSection() {
  return (
    <Section id="open-source" ariaLabel="Open source" className="overflow-hidden bg-surface/40">
      <Glow className="-left-24 top-0 size-96" tone="azure" />
      <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Open Source</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              Built in the open.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe developer tools are better when people can understand how they work.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <ul className="mt-8 space-y-3">
              {[
                "Inspect the code.",
                "Run it yourself.",
                "Build on top of it.",
                "Contribute improvements.",
              ].map((line) => (
                <li key={line} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span aria-hidden className="h-px w-5 bg-violet/70" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={220}>
            <ButtonLink href={LINKS.openSource} className="mt-10">
              Open Source
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-background">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="nz-label">nightzeros / chatai</span>
              <span className="nz-label">main</span>
            </div>
            <ul className="p-3 font-mono text-[0.8125rem]">
              {TREE.map((node) => (
                <li
                  key={node.name}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  style={{ paddingLeft: `${node.depth * 18 + 8}px` }}
                >
                  {node.type === "dir" ? (
                    <Folder aria-hidden className="size-3.5 text-violet/70" />
                  ) : (
                    <FileCode2 aria-hidden className="size-3.5 text-foreground/40" />
                  )}
                  {node.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
