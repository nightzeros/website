import { Reveal, Section, SectionLabel } from "./primitives";

const COLUMNS = [
  {
    n: "01",
    title: "AI",
    body: "Practical AI products grounded in real data and real workflows.",
  },
  {
    n: "02",
    title: "Developer Tools",
    body: "Reusable infrastructure that removes unnecessary complexity.",
  },
  {
    n: "03",
    title: "Open Source",
    body: "Software designed to be inspected, extended and self-hosted.",
  },
];

export function FocusSection() {
  return (
    <Section ariaLabel="Why NightZeros">
      <Reveal>
        <SectionLabel>Why NightZeros</SectionLabel>
      </Reveal>
      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
        <Reveal delay={60}>
          <h2 className="nz-h2">
            Tools we wish existed.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            If we need a tool and believe other developers would find it useful too, we build it
            properly and share it.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden border-t border-border md:grid-cols-3">
        {COLUMNS.map((col, i) => (
          <Reveal key={col.title} delay={i * 110}>
            <div className="h-full border-b border-border pt-8 pb-10 md:border-b-0 md:border-r md:pr-8 md:last:border-r-0 md:[&:not(:first-child)]:pl-8">
              <span className="font-mono text-xs text-violet">{col.n}</span>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.01em]">{col.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {col.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
