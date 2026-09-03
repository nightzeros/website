import { ArrowRight } from "lucide-react";
import { ButtonLink, Glow, NZMark, Reveal } from "./primitives";
import { LINKS } from "./links";
import { CTA } from "./projects-data";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-5 py-4 sm:px-8">
        <a href={LINKS.home} className="inline-flex items-center gap-3" aria-label="NightZeros home">
          <NZMark />
          <span className="font-mono text-sm font-medium tracking-[0.2em]">NIGHTZEROS</span>
        </a>
      </header>
      <main id="main" className="relative overflow-hidden px-5 py-32 sm:px-8">
        <Glow className="nz-drift-slow -left-10 top-10 size-[22rem] max-w-[70vw] opacity-50" />
        <div className="nz-container relative">
          <Reveal>
            <p className="nz-label">404</p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="nz-h1 mt-8 max-w-2xl">Nothing here yet.</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="nz-lead mt-6 max-w-md">
              That route does not exist on the NightZeros site. Head back home or explore what we are
              building.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={LINKS.home}>
                Back to NightZeros
                <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href={LINKS.projects} variant="ghost">
                {CTA.exploreProjects}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
