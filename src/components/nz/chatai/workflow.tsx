import { Reveal, Section, SectionLabel } from "../primitives";

const STEPS = [
  {
    n: "01",
    title: "Add knowledge",
    items: ["Documents", "Text", "Website content", "Product information"],
  },
  { n: "02", title: "Prepare", items: ["Extract", "Chunk", "Embed", "Index"] },
  {
    n: "03",
    title: "Retrieve",
    items: ["Understand question", "Search relevant context", "Select useful knowledge"],
  },
  {
    n: "04",
    title: "Generate",
    items: ["Use retrieved context", "Generate grounded answer", "Stream response"],
  },
  { n: "05", title: "Deliver", items: ["Website widget", "React", "Widget", "SDK"] },
];

export function ChataiWorkflow() {
  return (
    <Section ariaLabel="How ChatAI works" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Process / 01—05</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          From documents to answers.
        </h2>
      </Reveal>

      <ol className="mt-14 space-y-2">
        {STEPS.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 100}>
              <div className="group nz-surface-hover grid gap-5 rounded-xl border border-border bg-surface p-6 hover:border-violet/45 sm:grid-cols-[auto_minmax(0,16rem)_minmax(0,1fr)] sm:items-center sm:gap-8 sm:p-7">
                <span className="font-mono text-sm text-violet">{s.n}</span>
                <h3 className="text-lg font-medium tracking-[-0.01em]">{s.title}</h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {s.items.map((item) => (
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
            {i < STEPS.length - 1 ? (
              <div aria-hidden className="flex justify-center py-1 sm:justify-start sm:pl-9">
                <svg width="2" height="18" viewBox="0 0 2 18" className="text-violet/60">
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
    </Section>
  );
}
