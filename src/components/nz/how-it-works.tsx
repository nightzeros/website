import { Reveal, Section, SectionLabel } from "./primitives";

const STEPS = [
  { n: "01", title: "Add knowledge", items: ["Documents", "Information", "Website content"] },
  { n: "02", title: "ChatAI prepares it", items: ["Extract", "Chunk", "Embed", "Index"] },
  { n: "03", title: "Ask questions", items: ["Retrieve", "Generate", "Answer"] },
  { n: "04", title: "Use it anywhere", items: ["Website", "React", "Widget", "SDK"] },
];

export function HowItWorks() {
  return (
    <Section ariaLabel="How ChatAI works">
      <Reveal>
        <SectionLabel>Process / 01—04</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          From your knowledge
          <br />
          to an AI assistant.
        </h2>
      </Reveal>

      <ol className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.n} className="bg-surface">
            <Reveal delay={i * 110}>
              <div className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-violet">{step.n}</span>
                  <span aria-hidden className="text-muted-foreground/60 md:rotate-[-90deg]">
                    ↓
                  </span>
                </div>
                <h3 className="mt-6 text-base font-medium">{step.title}</h3>
                <ul className="mt-5 space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                    >
                      <span aria-hidden className="h-px w-3 bg-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
