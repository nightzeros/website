import { Copy } from "lucide-react";
import { Reveal, Section, SectionLabel } from "../primitives";
import { PACKAGES } from "../links";

function PackageRow({
  name,
  description,
  delay,
}: {
  name: string;
  description: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group flex items-center justify-between gap-4 border-b border-border py-5 last:border-b-0">
        <div className="min-w-0">
          <p className="truncate font-mono text-sm font-medium text-foreground">{name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => navigator.clipboard?.writeText(`npm i ${name}`)}
          className="shrink-0 rounded-md border border-border p-2 text-muted-foreground opacity-0 transition-all hover:border-violet/60 hover:text-foreground group-hover:opacity-100 focus:opacity-100"
          aria-label={`Copy install command for ${name}`}
        >
          <Copy aria-hidden className="size-3.5" />
        </button>
      </div>
    </Reveal>
  );
}

export function DeveloperEcosystem() {
  return (
    <Section ariaLabel="Developer ecosystem">
      <Reveal>
        <SectionLabel>Packages</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          Built for developers.
        </h2>
      </Reveal>

      <div className="mt-12 rounded-xl border border-border bg-surface">
        <div className="border-b border-border px-6 py-3">
          <span className="nz-label">npm / @nightzeros</span>
        </div>
        <div className="px-6">
          {PACKAGES.map((pkg, i) => (
            <PackageRow
              key={pkg.name}
              name={pkg.name}
              description={pkg.description}
              delay={80 + i * 50}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
