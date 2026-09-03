import { ArrowUpRight } from "lucide-react";
import { CodeBlock, CodeWindow } from "../code-window";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS, PACKAGES } from "../links";

const INSTALLS = [
  { title: "pnpm / react", code: "pnpm add @nightzeros/chatai-react" },
  { title: "pnpm / sdk", code: "pnpm add @nightzeros/chatai-sdk" },
];

export function OpenSourceEcosystem() {
  return (
    <Section ariaLabel="Developer ecosystem">
      <Reveal>
        <SectionLabel>Ecosystem</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          Use the pieces you need.
        </h2>
      </Reveal>

      <div className="mt-12 rounded-xl border border-border bg-surface">
        <div className="border-b border-border px-6 py-3">
          <span className="nz-label">npm / @nightzeros</span>
        </div>
        <ul>
          {PACKAGES.map((pkg, i) => (
            <li key={pkg.name}>
              <Reveal delay={80 + i * 90}>
        <div className="nz-surface-hover flex flex-col gap-2 border-b border-border px-6 py-5 last:border-b-0 hover:bg-surface-2/40 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="break-all font-mono text-sm font-medium">{pkg.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <TextLink href={pkg.url} external className="shrink-0">
                    npm
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </TextLink>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {INSTALLS.map((item, i) => (
          <Reveal key={item.title} delay={i * 110}>
            <CodeWindow title={item.title}>
              <CodeBlock code={item.code} prompt />
            </CodeWindow>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <TextLink href={LINKS.npm} external className="mt-8">
          View packages on npm
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
