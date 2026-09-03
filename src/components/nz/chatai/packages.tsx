import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS, PACKAGES } from "../links";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Copy ${value}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        } catch {
          setCopied(false);
        }
      }}
      className="grid size-9 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-violet/50 hover:text-foreground"
    >
      {copied ? (
        <Check aria-hidden className="size-4 text-violet" />
      ) : (
        <Copy aria-hidden className="size-4" />
      )}
    </button>
  );
}

export function ChataiPackages() {
  return (
    <Section ariaLabel="npm packages">
      <Reveal>
        <SectionLabel>Packages</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Built for developers.
        </h2>
      </Reveal>

      <ul className="mt-14 grid gap-4 md:grid-cols-2">
        {PACKAGES.map((pkg, i) => (
          <li key={pkg.name}>
            <Reveal delay={i * 100}>
              <div className="nz-surface-hover h-full rounded-xl border border-border bg-surface p-6 hover:border-violet/45">
                <div className="flex items-start justify-between gap-3">
                  <code className="min-w-0 break-all font-mono text-sm text-foreground">
                    {pkg.name}
                  </code>
                  <CopyButton value={pkg.name} />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{pkg.description}</p>
                <TextLink href={pkg.url} external className="mt-5">
                  View on npm
                  <ArrowUpRight aria-hidden className="size-3.5" />
                </TextLink>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={140}>
        <TextLink href={LINKS.npm} external className="mt-8">
          All packages on npm
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
