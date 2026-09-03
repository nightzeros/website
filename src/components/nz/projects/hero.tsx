import { Glow, GridBackground, Reveal } from "../primitives";

export function ProjectsHero() {
  return (
    <section
      aria-label="Projects introduction"
      className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44"
    >
      <GridBackground />
      <Glow className="nz-drift -left-16 top-12 size-[28rem] max-w-[70vw]" />
      <Glow
        tone="azure"
        className="nz-drift-slow -right-24 top-24 size-[22rem] max-w-[60vw] [animation-delay:-5s]"
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" className="text-foreground/8" strokeWidth="1">
          <line x1="160" y1="0" x2="160" y2="500" />
          <line x1="1040" y1="0" x2="1040" y2="500" />
          <line x1="0" y1="400" x2="1200" y2="400" />
        </g>
        <g className="fill-foreground/20 font-mono" fontSize="10" letterSpacing="2">
          <text x="176" y="420">NZ/001</text>
          <text x="960" y="420">PROJECTS</text>
        </g>
      </svg>

      <div className="nz-container relative">
        <Reveal>
          <p className="nz-label">NightZeros / Projects</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="nz-h1 mt-8 max-w-3xl">What we&apos;re building.</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-xl text-lg font-medium text-foreground/80">
            Every NightZeros project starts at zero.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="nz-lead mt-4 max-w-xl sm:text-lg">
            We build tools we want to use ourselves, turn them into real products, and share them
            with other developers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
