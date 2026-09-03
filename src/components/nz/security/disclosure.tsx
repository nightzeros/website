import { Reveal, Section, SectionLabel } from "../primitives";

const STEPS = [
  {
    n: "01",
    title: "Describe the issue",
    points: [
      "affected project",
      "affected version or URL",
      "steps to reproduce",
      "expected vs actual behavior",
    ],
  },
  {
    n: "02",
    title: "Explain the impact",
    points: [
      "what an attacker could potentially do",
      "what data or functionality may be affected",
    ],
  },
  {
    n: "03",
    title: "Include supporting details",
    points: [
      "request/response examples",
      "screenshots where useful",
      "minimal proof of concept",
    ],
  },
  {
    n: "04",
    title: "Keep it private",
    body: "Do not open a public GitHub issue for an unpatched vulnerability.",
  },
];

export function SecurityDisclosure() {
  return (
    <Section ariaLabel="Responsible disclosure">
      <Reveal>
        <SectionLabel>Responsible Disclosure</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Found a vulnerability? Tell us privately.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Please give us a reasonable opportunity to investigate and fix security issues before
          making them public.
        </p>
      </Reveal>

      <ol className="mt-16 max-w-3xl border-t border-border">
        {STEPS.map((step, i) => (
          <li key={step.n}>
            <Reveal delay={i * 90}>
              <div className="grid gap-4 border-b border-border py-8 sm:grid-cols-[4rem_minmax(0,1fr)]">
                <span className="font-mono text-xs text-violet">{step.n}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.01em]">{step.title}</h3>
                  {"points" in step && step.points ? (
                    <ul className="mt-4 space-y-2">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-violet/60" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {"body" in step && step.body ? (
                    <p className="mt-4 border-l border-violet/40 pl-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
                      {step.body}
                    </p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
