import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const YOU = [
  "server patching",
  "database access",
  "TLS/reverse proxy",
  "secrets management",
  "backups",
  "provider credentials",
];

const PROJECT = [
  "application-level controls",
  "deployment documentation",
  "security settings",
  "upgrade guidance",
];

export function SecuritySelfHost() {
  return (
    <Section ariaLabel="Self-hosting responsibility">
      <Reveal>
        <SectionLabel>Self-hosting</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Security changes when you run it yourself.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          When you self-host a NightZeros project, infrastructure security becomes a shared
          responsibility.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-surface p-6 sm:p-8">
            <span className="nz-label text-foreground/70">You control</span>
            <ul className="mt-6 space-y-3">
              {YOU.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-violet/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div className="h-full bg-surface p-6 sm:p-8">
            <span className="nz-label text-foreground/70">The project provides</span>
            <ul className="mt-6 space-y-3">
              {PROJECT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-azure/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={140}>
        <TextLink href={LINKS.docsSelfHost} external className="mt-8">
          Read the self-hosting guide
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
