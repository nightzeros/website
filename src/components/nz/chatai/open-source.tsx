import { Github } from "lucide-react";
import { ButtonLink, Glow, Reveal, Section, SectionLabel } from "../primitives";
import { LINKS } from "../links";

const ITEMS = [
  { label: "Source code", meta: "REPO" },
  { label: "Self-hosting", meta: "DEPLOY" },
  { label: "Public releases", meta: "CHANGELOG" },
  { label: "Contribution guidelines", meta: "CONTRIBUTING" },
  { label: "Security policy", meta: "SECURITY.MD" },
  { label: "Developer documentation", meta: "DOCS" },
];

export function ChataiOpenSource() {
  return (
    <Section ariaLabel="Open source" className="overflow-hidden bg-surface/40">
      <Glow className="-left-24 top-0 size-96" tone="azure" />
      <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Open Source</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              Built in the open.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Inspect the code, run it yourself, extend it, or contribute improvements.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <ButtonLink href={LINKS.githubChatai} external className="mt-9">
              <Github aria-hidden className="size-4" />
              View ChatAI on GitHub
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border">
            {ITEMS.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between gap-3 bg-surface px-5 py-4 transition-colors hover:bg-surface-2/50"
              >
                <span className="text-sm">{item.label}</span>
                <span className="nz-label">{item.meta}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
