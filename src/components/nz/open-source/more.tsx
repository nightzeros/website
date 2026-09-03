import { ArrowRight } from "lucide-react";
import { ButtonLink, Reveal, Section, SectionLabel } from "../primitives";
import { LINKS } from "../links";

export function OpenSourceMore() {
  return (
    <Section ariaLabel="Projects">
      <Reveal>
        <SectionLabel>Projects</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          More to come.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          ChatAI is NZ/001. NightZeros is just getting started.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <ButtonLink href={LINKS.projects} className="mt-10">
          View all projects
          <ArrowRight aria-hidden className="size-4" />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
