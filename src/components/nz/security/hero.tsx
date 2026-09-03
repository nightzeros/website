import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal } from "../primitives";
import { LINKS } from "../links";

export function SecurityHero() {
  return (
    <section
      aria-label="Security introduction"
      className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44"
    >
      <GridBackground />
      <Glow className="-left-20 top-16 size-[22rem] max-w-[55vw] opacity-60" />
      <Glow
        tone="azure"
        className="-right-16 bottom-0 size-[18rem] max-w-[50vw] opacity-40"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 1200 480"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" className="text-foreground/8" strokeWidth="1">
          <line x1="160" y1="0" x2="160" y2="480" />
          <line x1="0" y1="400" x2="1200" y2="400" />
        </g>
        <g className="text-violet/45" stroke="currentColor" strokeWidth="1" fill="none">
          <path className="nz-flow" d="M160 400 L480 400 L480 200 L1040 200" />
        </g>
        <g className="fill-foreground/22 font-mono" fontSize="10" letterSpacing="2">
          <text x="176" y="420">NZ/001</text>
          <text x="176" y="190">SECURITY / POLICY</text>
          <text x="900" y="420">SERVER-SIDE</text>
        </g>
      </svg>

      <div className="nz-container relative">
        <Reveal>
          <p className="nz-label">NightZeros / Security</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-8 max-w-3xl nz-h1">
            Security is part of the product.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            NightZeros builds developer tools that may run on public websites and handle sensitive
            configuration. Security decisions are designed into the product rather than treated as
            an afterthought.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            If you believe you have found a vulnerability in a NightZeros project, please report it
            responsibly.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href={LINKS.docsSecurity} external>
              Report a vulnerability
              <ArrowUpRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href={LINKS.docs} variant="ghost" external>
              Documentation
              <ArrowUpRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
