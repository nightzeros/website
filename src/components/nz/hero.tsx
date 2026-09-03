import { ArrowRight, Github } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal } from "./primitives";
import { LINKS } from "./links";

function HeroVisual() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <GridBackground />
      <Glow className="nz-drift left-[8%] top-[18%] size-[34rem] max-w-[80vw]" />
      <Glow
        tone="azure"
        className="nz-drift-slow right-[4%] top-[40%] size-[28rem] max-w-[70vw] [animation-delay:-4s]"
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" className="text-foreground/12" strokeWidth="1">
          <line x1="0" y1="120" x2="1200" y2="120" />
          <line x1="0" y1="600" x2="1200" y2="600" />
          <line x1="160" y1="0" x2="160" y2="700" />
          <line x1="1040" y1="0" x2="1040" y2="700" />
        </g>
        <g className="text-violet/70" stroke="currentColor" strokeWidth="1" fill="none">
          <path className="nz-flow" d="M160 600 L520 600 L520 300 L1040 300" />
          <path
            className="nz-flow [animation-delay:-0.8s]"
            d="M160 120 L860 120 L860 480 L1040 480"
          />
        </g>
        <g className="text-foreground/40" fill="currentColor">
          <circle cx="160" cy="120" r="2.5" />
          <circle cx="1040" cy="300" r="2.5" />
          <circle cx="520" cy="600" r="2.5" />
        </g>
        <g className="fill-foreground/25 font-mono" fontSize="11" letterSpacing="2">
          <text x="176" y="110">
            X / 001
          </text>
          <text x="960" y="290">
            NZ/001
          </text>
          <text x="176" y="620">
            00.00 — ORIGIN
          </text>
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="NightZeros introduction"
      className="relative flex min-h-[92svh] items-center overflow-hidden px-5 pb-24 pt-36 sm:px-8"
    >
      <HeroVisual />
      <div className="nz-container relative">
        <Reveal>
          <p className="nz-label">Open-source AI and developer tools</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="nz-display mt-8 max-w-4xl">
            Build beyond
            <br />
            <span className="nz-accent-text">the obvious.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="nz-lead mt-8 max-w-xl sm:text-lg">
            NightZeros builds open-source AI and developer tools that turn ideas into working
            software.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
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
        <Reveal delay={400}>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6">
            <span className="nz-label">NZ/001 — ChatAI</span>
            <span className="nz-label">Studio / Independent</span>
            <span className="nz-label">MIT · Self-hostable</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
