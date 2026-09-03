import { ArrowRight } from "lucide-react";
import { ButtonLink, ProjectStatus, Reveal, Section, SectionLabel, Tag } from "../primitives";
import { LINKS } from "../links";

export function AboutProjectSystem() {
  return (
    <Section ariaLabel="Project numbering">
      <Reveal>
        <SectionLabel>Projects</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Everything gets a number.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>NightZeros projects are identified by a simple project number.</p>
          <p className="font-mono text-foreground">NZ/001 — ChatAI</p>
          <p>
            The number marks where the project sits in the NightZeros story, without forcing every
            idea into the same product category.
          </p>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-8">
          <div>
            <span className="nz-label text-foreground/70">NZ/001</span>
            <p className="mt-3 font-mono text-3xl font-semibold tracking-[-0.02em]">ChatAI</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ProjectStatus />
              <Tag>Open Source</Tag>
            </div>
          </div>
          <ButtonLink href={LINKS.projects}>
            Explore projects
            <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
