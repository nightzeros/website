import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const DETAILS = [
  { label: "Type", value: "Open-source AI platform" },
  { label: "Status", value: "Active" },
  { label: "Project", value: "NZ/001" },
  { label: "Ecosystem", value: "React · SDK · Widget · Self-host" },
];

const DETAIL_LINKS = [
  { label: "App", href: LINKS.app, external: true },
  { label: "Docs", href: LINKS.docs, external: true },
  { label: "GitHub", href: LINKS.githubChatai, external: true },
  { label: "npm", href: LINKS.npm, external: true },
];

export function ProjectDetails() {
  return (
    <Section ariaLabel="ChatAI project details">
      <Reveal>
        <SectionLabel>ChatAI / Details</SectionLabel>
      </Reveal>

      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {DETAILS.map((detail, i) => (
          <Reveal key={detail.label} delay={i * 90} variant="fade">
            <div className="nz-surface-hover bg-surface px-6 py-5 hover:bg-surface-2/80">
              <span className="nz-label">{detail.label}</span>
              <p className="mt-2.5 text-sm font-medium text-foreground">{detail.value}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={220}>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-border bg-surface px-6 py-4">
          <span className="nz-label shrink-0">Links</span>
          {DETAIL_LINKS.map((link) => (
            <TextLink key={link.label} href={link.href} external={link.external}>
              {link.label}
            </TextLink>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
