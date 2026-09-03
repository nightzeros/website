import { ArrowRight } from "lucide-react";
import { ProjectStatus, Reveal, Section, SectionLabel, Tag } from "./primitives";
import { LINKS } from "./links";

export function ProjectsSection() {
  return (
    <Section id="projects" ariaLabel="Projects">
      <Reveal>
        <SectionLabel>Projects</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          What we&apos;re building.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <a
          href={LINKS.chatai}
          className="group nz-surface-hover mt-14 block rounded-xl border border-border bg-surface p-7 hover:border-violet/50 sm:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <span className="nz-label text-foreground/70">NZ/001</span>
              <p className="mt-4 font-mono text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                ChatAI
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Open-source AI assistants grounded in your knowledge.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ProjectStatus />
                <Tag>Open Source</Tag>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              Explore ChatAI
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </div>
        </a>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-4 rounded-xl border border-dashed border-border px-7 py-8 sm:px-10">
          <span className="nz-label">More to come</span>
          <p className="mt-3 text-sm text-muted-foreground">We&apos;re just getting started.</p>
        </div>
      </Reveal>
    </Section>
  );
}
