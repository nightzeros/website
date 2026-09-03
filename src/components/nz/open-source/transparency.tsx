import { Reveal, Section } from "../primitives";

const ROWS = [
  { label: "Source", value: "Public code" },
  { label: "Docs", value: "Developer documentation" },
  { label: "Packages", value: "Versioned npm releases" },
  { label: "Self-host", value: "Deployment path" },
  { label: "Security", value: "Responsible disclosure" },
  { label: "Contributing", value: "Community participation" },
];

export function OpenSourceTransparency() {
  return (
    <Section ariaLabel="Open source philosophy" className="bg-surface/40">
      <Reveal>
        <h2 className="max-w-3xl nz-h2">
          Source code is only the beginning.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          For us, building in the open also means making architecture, security decisions, deployment
          options, and limitations understandable to the people using the software.
        </p>
      </Reveal>

      <div className="mt-14 overflow-hidden rounded-xl border border-border">
        {ROWS.map((row, i) => (
          <Reveal key={row.label} delay={i * 80}>
            <div className="grid gap-2 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:items-baseline">
              <span className="nz-label text-foreground/70">{row.label}</span>
              <span className="text-sm text-muted-foreground">{row.value}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
