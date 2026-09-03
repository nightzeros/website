import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const TOPICS = [
  "Getting Started",
  "React",
  "SDK",
  "Widget",
  "RAG / Knowledge",
  "Security",
  "Privacy",
  "Self-hosting",
];

export function OpenSourceDocs() {
  return (
    <Section ariaLabel="Documentation">
      <Reveal>
        <SectionLabel>Documentation</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          Understand how it works.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Installation, configuration, security, privacy, self-hosting, and developer integration
          should be documented alongside the software.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {TOPICS.map((topic, i) => (
          <li key={topic}>
            <Reveal delay={i * 30}>
              <div className="bg-surface px-5 py-4">
                <span className="text-sm text-foreground/85">{topic}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={140}>
        <TextLink href={LINKS.docs} external className="mt-8">
          Read the documentation
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
