import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const COLUMNS = [
  {
    title: "Hosted",
    meta: "MANAGED",
    steps: ["Your site", "NightZeros hosted ChatAI", "Managed infrastructure"],
  },
  {
    title: "Self-hosted",
    meta: "YOUR STACK",
    steps: ["Your site", "Your ChatAI deployment", "Your database + AI provider"],
  },
];

export function OpenSourceSelfHost() {
  return (
    <Section ariaLabel="Self-hosting" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Self Host</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          Run it on your infrastructure.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Open source should give developers a meaningful path to control their own deployment.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {COLUMNS.map((col, ci) => (
          <Reveal key={col.title} delay={ci * 120}>
            <div className="h-full rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
                <h3 className="text-lg font-medium">{col.title}</h3>
                <span className="nz-label">{col.meta}</span>
              </div>
              <ol className="mt-6">
                {col.steps.map((step, i) => (
                  <li key={step}>
                    <div className="rounded-lg border border-border bg-surface-2/70 px-4 py-3.5 text-sm">
                      {step}
                    </div>
                    {i < col.steps.length - 1 ? (
                      <div aria-hidden className="flex justify-center py-1.5">
                        <svg width="2" height="18" viewBox="0 0 2 18" className="text-violet/60">
                          <line
                            className="nz-flow"
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Choose the hosted experience for convenience or deploy ChatAI yourself when you want
          greater infrastructure control.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <TextLink href={LINKS.docsSelfHost} external className="mt-6">
          Read the self-hosting guide
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
