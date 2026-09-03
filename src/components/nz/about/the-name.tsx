import { Glow, Reveal, Section, SectionLabel } from "../primitives";

export function AboutTheName() {
  return (
    <Section ariaLabel="Why the name NightZeros" className="overflow-hidden">
      <Glow className="left-1/2 top-1/2 size-[32rem] max-w-[80vw] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="relative grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <Reveal>
          <div className="relative">
            <span
              aria-hidden
              className="block font-mono text-[clamp(8rem,28vw,16rem)] font-bold leading-[0.8] tracking-[-0.08em] text-foreground/[0.08]"
            >
              N0
            </span>
            <span className="nz-label mt-6 block text-foreground/50">NZ/000 — ORIGIN</span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>The Name</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              Why NightZeros?
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <div className="mt-10 max-w-lg space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>Most software begins with almost nothing.</p>
              <p>An idea. An empty repository. A blank file. A first line of code.</p>
              <p className="font-medium text-foreground">Zero is the starting point.</p>
              <p>NightZeros is about what gets built from there.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
