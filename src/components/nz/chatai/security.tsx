import { ArrowUpRight, Bot, FileClock, Globe, KeyRound, PenLine, Timer } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const FEATURES = [
  { icon: Globe, title: "Domain allowlists", body: "Control which origins can run an assistant." },
  { icon: Timer, title: "Widget rate limiting", body: "Throttle traffic from public embeds." },
  { icon: Bot, title: "Bot heuristics", body: "Flag automated or abusive request patterns." },
  { icon: PenLine, title: "Optional widget signing", body: "Verify widget sessions when needed." },
  {
    icon: KeyRound,
    title: "Encrypted provider credentials",
    body: "Provider keys are stored encrypted.",
  },
  { icon: FileClock, title: "Audit events", body: "Track operational changes over time." },
];

export function ChataiSecurity() {
  return (
    <Section ariaLabel="Security" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Security</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Designed for public embeds.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A public AI assistant needs more than a chat interface. ChatAI includes controls designed
          to help operators reduce abuse and control where assistants can run.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <li key={f.title} className="bg-surface">
            <Reveal delay={i * 90}>
              <div className="flex h-full flex-col p-6 transition-colors hover:bg-surface-2/40 sm:p-7">
                <f.icon aria-hidden className="size-5 text-violet/80" />
                <h3 className="mt-5 text-base font-medium">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={120}>
        <TextLink href={LINKS.docsSecurity} external className="mt-8">
          Security documentation
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
