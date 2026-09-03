import { Reveal, Section, SectionLabel } from "../primitives";

const PRINCIPLES = [
  {
    n: "01",
    title: "Inspect",
    body: "Understand how the software works instead of relying on a black box.",
  },
  {
    n: "02",
    title: "Run",
    body: "Deploy projects on infrastructure you control when self-hosting is supported.",
  },
  {
    n: "03",
    title: "Extend",
    body: "Adapt the software to your own products, workflows, and use cases.",
  },
  {
    n: "04",
    title: "Contribute",
    body: "Report issues, suggest improvements, and contribute changes back to the project.",
  },
];

export function OpenSourcePrinciples() {
  return (
    <Section ariaLabel="How we build">
      <Reveal>
        <SectionLabel>How We Build</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          Open by design.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden border-t border-border sm:grid-cols-2">
        {PRINCIPLES.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="h-full border-b border-border py-8 sm:pr-8 sm:[&:nth-child(even)]:pl-8 sm:[&:nth-child(odd)]:border-r">
              <span className="font-mono text-xs text-violet">{item.n}</span>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.01em]">{item.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
