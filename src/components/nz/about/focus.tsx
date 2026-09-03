import { Reveal, Section, SectionLabel } from "../primitives";

const AREAS = [
  {
    n: "01",
    title: "AI systems",
    body: "Practical AI products grounded in real data, knowledge, and workflows.",
  },
  {
    n: "02",
    title: "Developer tools",
    body: "Reusable tools and infrastructure that remove unnecessary complexity.",
  },
  {
    n: "03",
    title: "Open source",
    body: "Software developers can inspect, extend, contribute to, and self-host when appropriate.",
  },
];

export function AboutFocus() {
  return (
    <Section ariaLabel="Where we spend our time">
      <Reveal>
        <SectionLabel>Focus</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Where we spend our time.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden border-t border-border md:grid-cols-3">
        {AREAS.map((area, i) => (
          <Reveal key={area.title} delay={i * 110}>
            <div className="h-full border-b border-border pt-10 pb-12 md:border-b-0 md:border-r md:pr-10 md:last:border-r-0 md:[&:not(:first-child)]:pl-10">
              <span className="font-mono text-xs text-violet">{area.n}</span>
              <h3 className="mt-5 text-xl font-medium tracking-[-0.01em]">{area.title}</h3>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {area.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
