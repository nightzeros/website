import { ArrowRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

export function OpenSourceSecurity() {
  return (
    <Section ariaLabel="Security" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Security</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-3xl nz-h2">
          Report vulnerabilities responsibly.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Security issues should be reported through the project&apos;s responsible disclosure
          process rather than opened publicly before they are resolved.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <TextLink href={LINKS.security} className="mt-8">
          NightZeros security
          <ArrowRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-6 max-w-xl border-l border-violet/40 pl-4 text-sm leading-relaxed text-muted-foreground">
          Do not open public GitHub issues for unpatched security vulnerabilities.
        </p>
      </Reveal>
    </Section>
  );
}
