import { Reveal, Section, SectionLabel } from "../primitives";

export function AboutWhatWeAre() {
  return (
    <Section ariaLabel="What we are">
      <div className="grid gap-12 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-20">
        <Reveal>
          <SectionLabel>What We Are</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="max-w-2xl nz-h2">
              A place to build useful software.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                NightZeros is a product and engineering studio for experimenting with ideas, building
                real software, and sharing useful tools with developers.
              </p>
              <p>
                The focus is not on chasing every trend. The focus is on solving real problems with
                software that is understandable, reusable, and built to last.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
