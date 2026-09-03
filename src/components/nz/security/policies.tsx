import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const RESOURCES = [
  {
    label: "ChatAI Security Policy",
    href: LINKS.docsSecurity,
    external: true,
  },
  {
    label: "ChatAI Documentation",
    href: LINKS.docs,
    external: true,
  },
  {
    label: "Open Source",
    href: LINKS.openSource,
    external: false,
  },
  {
    label: "Self-hosting",
    href: LINKS.docsSelfHost,
    external: true,
  },
];

export function SecurityPolicies() {
  return (
    <Section ariaLabel="Security policies">
      <Reveal>
        <SectionLabel>Policies</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Project-specific security information.
        </h2>
      </Reveal>

      <ul className="mt-14 max-w-2xl border-t border-border">
        {RESOURCES.map((item, i) => (
          <li key={item.label}>
            <Reveal delay={i * 80}>
              <div className="border-b border-border py-5">
                <TextLink href={item.href} external={item.external}>
                  {item.label}
                  <ArrowUpRight aria-hidden className="size-3.5" />
                </TextLink>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
