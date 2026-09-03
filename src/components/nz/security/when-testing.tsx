import { Reveal, Section, SectionLabel } from "../primitives";

const AVOID = [
  "accessing data that does not belong to them",
  "intentionally degrading service availability",
  "deleting or modifying other users' data",
  "using social engineering",
  "attempting physical attacks",
  "publishing an unpatched vulnerability before coordinated disclosure",
];

export function SecurityWhenTesting() {
  return (
    <Section ariaLabel="When testing" className="bg-surface/40">
      <Reveal>
        <SectionLabel>When Testing</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Test responsibly.
        </h2>
      </Reveal>

      <ul className="mt-14 max-w-2xl border-t border-border">
        {AVOID.map((item, i) => (
          <li key={item}>
            <Reveal delay={i * 80}>
              <div className="flex items-start gap-4 border-b border-border py-5">
                <span aria-hidden className="mt-2 h-px w-5 shrink-0 bg-violet/50" />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
