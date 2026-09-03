import { Reveal, Section, SectionLabel } from "./primitives";

const STEPS = ["Build", "Open", "Learn", "Repeat"];

export function ManifestoSection() {
  return (
    <Section id="manifesto" ariaLabel="NightZeros manifesto">
      <div className="grid gap-12 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-16">
        <Reveal>
          <SectionLabel>NightZeros / Manifesto</SectionLabel>
        </Reveal>
        <div>
          <Reveal delay={60}>
            <h2 className="max-w-2xl nz-h2">
              Great products start at zero.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                NightZeros is an independent software studio building open-source AI and developer
                tools.
              </p>
              <p>
                We experiment, build, ship, and share software that helps developers create better
                products.
              </p>
            </div>
          </Reveal>
          <ol className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
            {STEPS.map((step, i) => (
              <Reveal key={step} delay={160 + i * 90} variant="fade">
                <li className="flex items-center gap-4">
                  <span className="nz-label rounded-md border border-border bg-surface px-3 py-2 text-foreground/80">
                    {step}
                  </span>
                  <span aria-hidden className="text-violet/60">
                    {i < STEPS.length - 1 ? "→" : "↺"}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
