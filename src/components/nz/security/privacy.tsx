import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const ITEMS = [
  "no-store mode",
  "configurable retention",
  "visitor anonymization",
  "conversation export/delete controls",
  "audit metadata separated from message content where possible",
];

export function SecurityPrivacy() {
  return (
    <Section ariaLabel="Privacy and security" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Privacy</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Security without unnecessary content retention.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Operational security and usage controls should not require storing private conversation
          content when it is not needed.
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

      <Reveal delay={140}>
        <TextLink href={LINKS.docsPrivacy} external className="mt-8">
          Read about privacy
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
