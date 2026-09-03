import { Reveal, Section, SectionLabel } from "../primitives";

const BROWSER = [
  "public assistant identifier",
  "widget appearance configuration",
  "non-secret client settings",
];

const SERVER = [
  "AI provider keys",
  "encryption keys",
  "database credentials",
  "billing secrets",
  "privileged API credentials",
];

export function SecurityPublicEmbeds() {
  return (
    <Section ariaLabel="Public embeds">
      <Reveal>
        <SectionLabel>Public Embeds</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Assume the browser is observable.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Anything delivered to the browser should be treated as public. Public assistant IDs and
          widget configuration are not the same as server credentials.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-surface p-6 sm:p-8">
            <span className="nz-label text-foreground/70">Safe for browser</span>
            <ul className="mt-6 space-y-3">
              {BROWSER.map((item) => (
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
            <span className="nz-label text-foreground/70">Server only</span>
            <ul className="mt-6 space-y-3">
              {SERVER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-azure/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
