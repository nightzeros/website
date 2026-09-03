import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink, Glow, GridBackground, Reveal } from "../primitives";
import { LINKS } from "../links";

export function SecurityFinalCta() {
  return (
    <section
      aria-label="Report a vulnerability"
      className="relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 md:py-36"
    >
      <GridBackground />
      <Glow className="left-1/2 top-1/2 size-[32rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="nz-container relative text-center">
        <Reveal>
          <p className="nz-label">Security</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mx-auto mt-8 max-w-3xl nz-cta">
            Found something? Report it responsibly.
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Help us investigate and fix security issues before they affect other users.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={LINKS.docsSecurity} external>
              View security policy
              <ArrowUpRight aria-hidden className="size-4" />
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
