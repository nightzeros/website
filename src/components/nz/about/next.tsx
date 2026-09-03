import { Reveal, Section, SectionLabel } from "../primitives";

export function AboutNext() {
  return (
    <Section ariaLabel="What's next">
      <Reveal>
        <SectionLabel>What&apos;s Next</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          We&apos;re just getting started.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            NightZeros will continue building practical AI products, developer tools, and open-source
            software around problems we genuinely want to solve.
          </p>
          <p>Not every experiment will become a product. The ones that do should earn their place.</p>
        </div>
      </Reveal>
    </Section>
  );
}
