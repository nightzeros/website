import { ArrowRight, Github } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal } from "../primitives";
import { LINKS } from "../links";

export function OpenSourceFinalCta() {
  return (
    <section
      aria-label="Build in the open"
      className="relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 md:py-36"
    >
      <GridBackground />
      <Glow className="nz-drift left-1/2 top-1/2 size-[36rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2" />
      <div className="nz-container relative text-center">
        <Reveal>
          <p className="nz-label">Build in the Open</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mx-auto mt-8 max-w-3xl nz-cta">
            Use it. Study it. Improve it.
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore the source, try ChatAI, or follow NightZeros as we build what&apos;s next.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={LINKS.github} external>
              <Github aria-hidden className="size-4" />
              View on GitHub
            </ButtonLink>
            <ButtonLink href={LINKS.chatai} variant="ghost">
              Explore ChatAI
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
