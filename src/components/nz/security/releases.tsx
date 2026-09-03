import { Reveal, Section, SectionLabel } from "../primitives";

const ITEMS = [
  "lint/typecheck/test/build gates",
  "controlled releases",
  "versioned packages",
  "protected publish workflows",
  "immutable release versions",
  "documented upgrade paths",
];

export function SecurityReleases() {
  return (
    <Section ariaLabel="Releases" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Releases</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Ship deliberately.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          NightZeros uses automated checks and controlled release workflows where available, so
          changes move through review before they reach users.
        </p>
      </Reveal>

      <ul className="mt-12 max-w-2xl border-t border-border">
        {ITEMS.map((item, i) => (
          <li key={item}>
            <Reveal delay={i * 110}>
              <div className="flex items-start gap-4 border-b border-border py-4">
                <span aria-hidden className="mt-2 h-px w-5 shrink-0 bg-violet/50" />
                <p className="text-sm text-muted-foreground sm:text-base">{item}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
