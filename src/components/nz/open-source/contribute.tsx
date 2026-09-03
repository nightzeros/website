import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const STEPS = [
  { n: "01", title: "Explore the repository" },
  { n: "02", title: "Read contribution guidelines" },
  { n: "03", title: "Open an issue or discussion" },
  { n: "04", title: "Submit a pull request" },
];

export function OpenSourceContribute() {
  return (
    <Section ariaLabel="Contribute">
      <Reveal>
        <SectionLabel>Contribute</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 nz-h2">
          Help make it better.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Open-source projects improve when people use them, question them, report problems, and
          contribute better solutions.
        </p>
      </Reveal>

      <ol className="mt-14 grid gap-px overflow-hidden border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.n}>
            <Reveal delay={i * 90}>
              <div className="h-full border-b border-border py-8 sm:pr-6 lg:border-r lg:last:border-r-0 lg:[&:not(:first-child)]:pl-6">
                <span className="font-mono text-xs text-violet">{step.n}</span>
                <p className="mt-4 text-sm font-medium leading-snug">{step.title}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={160}>
        <div className="mt-8 flex flex-wrap gap-6">
          <TextLink href={LINKS.githubChatai} external>
            Repository
            <ArrowUpRight aria-hidden className="size-3.5" />
          </TextLink>
          <TextLink href={LINKS.githubIssues} external>
            Open issues
            <ArrowUpRight aria-hidden className="size-3.5" />
          </TextLink>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
          Contribution guidelines live in the repository when published. A dedicated contributing
          guide link will be added here once that document is available.
        </p>
      </Reveal>
    </Section>
  );
}
