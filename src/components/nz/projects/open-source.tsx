import { Github } from "lucide-react";
import { ButtonLink, Reveal, Section, SectionLabel } from "../primitives";
import { LINKS } from "../links";

export function ProjectsOpenSource() {
  return (
    <Section ariaLabel="Open source" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Open Source</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          Built in the open.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Inspect the code, run it yourself, extend it, or contribute improvements.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <ButtonLink href={LINKS.githubChatai} external className="mt-8">
          <Github aria-hidden className="size-4" />
          View source on GitHub
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
