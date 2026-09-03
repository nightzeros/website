import { ArrowUpRight, Download, EyeOff, Server, Trash2, DatabaseZap, History } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { LINKS } from "../links";

const FEATURES = [
  { icon: DatabaseZap, title: "No-store mode", body: "Run conversations without persisting them." },
  { icon: History, title: "Retention settings", body: "Decide how long data is kept." },
  { icon: EyeOff, title: "Visitor anonymization", body: "Reduce identifying details on visitors." },
  { icon: Download, title: "Conversation export", body: "Take operational data with you." },
  { icon: Trash2, title: "Hard delete", body: "Remove stored conversations permanently." },
  { icon: Server, title: "Self-hosting", body: "Keep everything inside your own infrastructure." },
];

export function ChataiPrivacy() {
  return (
    <Section ariaLabel="Privacy">
      <Reveal>
        <SectionLabel>Privacy</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Control what gets stored.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          ChatAI gives operators control over conversation persistence and retention without
          requiring private message content for every operational workflow.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <li key={f.title} className="bg-surface">
            <Reveal delay={i * 90}>
              <div className="flex h-full flex-col p-6 transition-colors hover:bg-surface-2/40 sm:p-7">
                <f.icon aria-hidden className="size-5 text-azure/85" />
                <h3 className="mt-5 text-base font-medium">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={120}>
        <TextLink href={LINKS.docsPrivacy} external className="mt-8">
          Privacy documentation
          <ArrowUpRight aria-hidden className="size-3.5" />
        </TextLink>
      </Reveal>
    </Section>
  );
}
