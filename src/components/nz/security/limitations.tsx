import { Reveal, Section } from "../primitives";

export function SecurityLimitations() {
  return (
    <Section ariaLabel="Security is ongoing">
      <Reveal>
        <h2 className="max-w-2xl nz-h2">
          Security is ongoing.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          No software is completely free from risk. We aim to reduce avoidable exposure, respond to
          reports responsibly, and keep improving the security of NightZeros projects over time.
        </p>
      </Reveal>
    </Section>
  );
}
