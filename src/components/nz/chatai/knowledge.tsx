import { Glow, Reveal, Section, SectionLabel } from "../primitives";

const FLOW = [
  { label: "User question", meta: "INPUT" },
  { label: "Search knowledge", meta: "SEMANTIC" },
  { label: "Relevant context", meta: "CHUNKS" },
  { label: "AI model", meta: "GENERATE" },
  { label: "Grounded response", meta: "OUTPUT" },
];

const POINTS = [
  "Document ingestion",
  "Semantic retrieval",
  "Configurable RAG settings",
  "Context-aware responses",
  "Source-aware workflows",
];

export function ChataiKnowledge() {
  return (
    <Section ariaLabel="Knowledge and retrieval" className="overflow-hidden">
      <Glow className="-right-24 top-8 size-96" tone="azure" />
      <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Knowledge</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              Answers grounded in what you provide.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Instead of relying only on a model&apos;s general knowledge, ChatAI can retrieve
              relevant information from your own knowledge base before responding.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className="size-1 shrink-0 rounded-full bg-violet" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="nz-label">Retrieval pipeline</span>
              <span className="nz-label">RAG</span>
            </div>
            <ol className="mt-6">
              {FLOW.map((f, i) => (
                <li key={f.label}>
                  <div className="nz-surface-hover flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-2/70 px-4 py-3.5 hover:border-violet/50">
                    <span className="text-sm font-medium">{f.label}</span>
                    <span className="nz-label">{f.meta}</span>
                  </div>
                  {i < FLOW.length - 1 ? (
                    <div aria-hidden className="flex justify-center py-1.5">
                      <svg width="2" height="18" viewBox="0 0 2 18" className="text-azure/70">
                        <line
                          className="nz-flow"
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Retrieval improves grounding, but answer quality still depends on your sources and
              model configuration.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
