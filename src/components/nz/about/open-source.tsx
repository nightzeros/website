import { ArrowRight } from "lucide-react";
import { ButtonLink, Reveal, Section, SectionLabel } from "../primitives";
import { LINKS } from "../links";

export function AboutOpenSource() {
  return (
    <Section ariaLabel="Open-source philosophy">
      <div className="grid gap-12 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-20">
        <Reveal>
          <SectionLabel>Open Source</SectionLabel>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="max-w-2xl nz-h2">
              Build in the open when it makes the product better.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Open source lets developers understand how software works, run it themselves, adapt
                it, and help improve it.
              </p>
              <p>
                NightZeros treats open source as part of the product design—not simply a repository
                made public after the work is finished.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ButtonLink href={LINKS.openSource} className="mt-10">
              Read our open-source approach
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
