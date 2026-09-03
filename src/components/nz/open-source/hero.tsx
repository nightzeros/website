import { ArrowRight, Github } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal } from "../primitives";
import { LINKS } from "../links";

export function OpenSourceHero() {
  return (
    <section
      aria-label="Open source introduction"
      className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44"
    >
      <GridBackground />
      <Glow className="nz-drift -left-16 top-10 size-[28rem] max-w-[70vw]" />
      <Glow
        tone="azure"
        className="nz-drift-slow -right-20 top-28 size-[22rem] max-w-[60vw] [animation-delay:-5s]"
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" className="text-foreground/8" strokeWidth="1">
          <line x1="160" y1="0" x2="160" y2="520" />
          <line x1="1040" y1="0" x2="1040" y2="520" />
          <line x1="0" y1="430" x2="1200" y2="430" />
        </g>
        <g className="text-violet/50" stroke="currentColor" strokeWidth="1" fill="none">
          <path className="nz-flow" d="M160 430 L420 430 L420 220 L1040 220" />
        </g>
        <g className="fill-foreground/22 font-mono" fontSize="10" letterSpacing="2">
          <text x="176" y="450">NZ/001</text>
          <text x="176" y="210">nightzeros/chatai</text>
          <text x="880" y="450">@nightzeros/*</text>
        </g>
      </svg>

      <div className="nz-container relative">
        <Reveal>
          <p className="nz-label">NightZeros / Open Source</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-8 max-w-3xl nz-h1">
            Built in the open.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We believe developer tools are better when people can understand how they work, run them
            themselves, extend them, and help improve them.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            Open source is not an afterthought at NightZeros. It is part of how we design and ship
            developer products.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href={LINKS.github} external>
              <Github aria-hidden className="size-4" />
              View on GitHub
            </ButtonLink>
            <ButtonLink href={LINKS.projects} variant="ghost">
              Explore Projects
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
