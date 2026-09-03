import { ArrowRight, Github } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal } from "../primitives";
import { LINKS } from "../links";

export function AboutClosing() {
  return (
    <section
      aria-label="NightZeros closing statement"
      className="relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 md:py-36"
    >
      <GridBackground />
      <Glow className="nz-drift-slow left-1/2 top-1/2 size-[34rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="nz-container relative">
        <Reveal>
          <p className="nz-label">NightZeros</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-10 max-w-3xl nz-cta">
            Start at zero.
            <br />
            Build something <span className="nz-accent-text">useful.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 text-lg text-muted-foreground">That&apos;s the idea.</p>
        </Reveal>
        <Reveal delay={170}>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href={LINKS.projects}>
              Explore Projects
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href={LINKS.github} variant="ghost" external>
              <Github aria-hidden className="size-4" />
              View on GitHub
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
