import { Reveal, Section, SectionLabel } from "../primitives";

export function MoreToCome() {
  return (
    <Section ariaLabel="Future projects">
      <Reveal>
        <SectionLabel>More to Come</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          We&apos;re just getting started.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          NightZeros is building a growing collection of open-source AI and developer tools.
        </p>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-12 rounded-xl border border-dashed border-border px-7 py-8 sm:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="nz-label text-foreground/50">NZ/002</span>
            <span className="nz-label">Next Project</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Not announced</p>
        </div>
      </Reveal>
    </Section>
  );
}
