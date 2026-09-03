import { ArrowRight, Github } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal } from "./primitives";
import { LINKS } from "./links";

export function FinalCta() {
  return (
    <section
      aria-label="Get started with NightZeros"
      className="relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 md:py-36"
    >
      <GridBackground />
      <Glow className="nz-drift left-1/2 top-1/2 size-[36rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-mono text-[28vw] font-bold leading-none text-foreground/[0.025]"
      >
        N0
      </span>
      <div className="nz-container relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl nz-h1">
            Build beyond
            <br />
            <span className="nz-accent-text">the obvious.</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore what we&apos;re building and help us make it better.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
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
