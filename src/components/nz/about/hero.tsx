import { Glow, GridBackground, Reveal } from "../primitives";

export function AboutHero() {
  return (
    <section
      aria-label="About NightZeros"
      className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44"
    >
      <GridBackground />
      <Glow className="nz-drift-slow -left-24 top-16 size-[22rem] max-w-[55vw] opacity-70" />
      <Glow
        tone="azure"
        className="-right-20 bottom-0 size-[18rem] max-w-[50vw] opacity-50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-28 font-mono text-[18vw] font-bold leading-none text-foreground/[0.03] sm:text-[9rem]"
      >
        N0
      </span>
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 480"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" className="text-foreground/8" strokeWidth="1">
          <line x1="160" y1="0" x2="160" y2="480" />
          <line x1="0" y1="400" x2="1200" y2="400" />
        </g>
        <g className="fill-foreground/20 font-mono" fontSize="10" letterSpacing="2">
          <text x="176" y="420">NZ/</text>
          <text x="980" y="420">ABOUT</text>
        </g>
      </svg>

      <div className="nz-container relative">
        <Reveal>
          <p className="nz-label">NightZeros / About</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-8 max-w-3xl nz-h1">
            We build from zero.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-foreground/85">
            NightZeros is an independent software studio focused on open-source AI and developer
            tools.
          </p>
        </Reveal>
        <Reveal delay={170}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build the tools we want to use ourselves, turn them into real products, and make
            them useful for other developers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
