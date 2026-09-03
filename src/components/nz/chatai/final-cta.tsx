import { ArrowUpRight, Github } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal, TextLink } from "../primitives";
import { LINKS } from "../links";

export function ChataiFinalCta() {
  return (
    <section
      aria-label="Get started with ChatAI"
      className="relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 md:py-36"
    >
      <GridBackground />
      <Glow className="nz-drift left-1/2 top-1/2 size-[34rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-mono text-[22vw] font-bold leading-none text-foreground/[0.025]"
      >
        NZ/001
      </span>
      <div className="nz-container relative text-center">
        <Reveal>
          <p className="nz-label">NZ/001</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mx-auto mt-6 max-w-3xl nz-cta">
            Build your <span className="nz-accent-text">AI assistant.</span>
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Give ChatAI your knowledge and bring it to your website.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={LINKS.app} external>
              Open ChatAI
              <ArrowUpRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href={LINKS.docs} variant="ghost" external>
              Read the docs
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-6 flex justify-center">
            <TextLink href={LINKS.githubChatai} external>
              <Github aria-hidden className="size-3.5" />
              View source on GitHub
            </TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
