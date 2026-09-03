import { Blocks, Search, Upload } from "lucide-react";
import { Reveal, Section, SectionLabel } from "../primitives";

const STEPS = [
  {
    n: "01",
    icon: Upload,
    title: "Add knowledge",
    body: "Upload documents, content, or information your assistant should understand.",
  },
  {
    n: "02",
    icon: Search,
    title: "Retrieve context",
    body: "ChatAI finds relevant knowledge before generating an answer.",
  },
  {
    n: "03",
    icon: Blocks,
    title: "Embed anywhere",
    body: "Use the assistant through the hosted widget, React integration, or developer SDK.",
  },
];

export function ChataiWhatItDoes() {
  return (
    <Section ariaLabel="What ChatAI does">
      <Reveal>
        <SectionLabel>What it does</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Turn your knowledge into an AI assistant.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Give ChatAI your information, let it retrieve the right context, and deliver helpful
          answers through your website or application.
        </p>
      </Reveal>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.n} className="bg-surface">
            <Reveal delay={i * 110}>
              <div className="group flex h-full flex-col p-6 transition-colors hover:bg-surface-2/40 sm:p-8">
                <div className="flex items-center justify-between">
                  <s.icon aria-hidden className="size-5 text-violet/80" />
                  <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
