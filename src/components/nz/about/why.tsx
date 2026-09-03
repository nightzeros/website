import { Reveal, Section, SectionLabel } from "../primitives";

const STEPS = [
  { n: "01", title: "Find a real problem" },
  { n: "02", title: "Build the smallest useful version" },
  { n: "03", title: "Use it ourselves" },
  { n: "04", title: "Improve what matters" },
  { n: "05", title: "Share it" },
];

export function AboutWhy() {
  return (
    <Section ariaLabel="Why NightZeros exists">
      <Reveal>
        <SectionLabel>Why</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Tools we wish existed.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>Many NightZeros projects begin with the same question: “Why is this harder than it should be?”</p>
          <p>
            If we need a tool, believe the problem is real, and think other developers could benefit
            from the solution, we build it properly.
          </p>
        </div>
      </Reveal>

      <ol className="mt-16 max-w-2xl border-t border-border">
        {STEPS.map((step, i) => (
          <li key={step.n}>
            <Reveal delay={i * 80}>
              <div className="grid grid-cols-[4rem_minmax(0,1fr)] items-baseline gap-4 border-b border-border py-5">
                <span className="font-mono text-xs text-violet">{step.n}</span>
                <p className="text-base font-medium tracking-[-0.01em] sm:text-lg">{step.title}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
