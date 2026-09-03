import { Reveal, Section, SectionLabel } from "../primitives";

const POINTS = [
  { title: "Assistant behavior", meta: "PROMPT" },
  { title: "Branding", meta: "IDENTITY" },
  { title: "Appearance", meta: "THEME" },
  { title: "Welcome message", meta: "GREETING" },
  { title: "RAG settings", meta: "RETRIEVAL" },
  { title: "Model / provider", meta: "CONFIG" },
  { title: "Widget settings", meta: "EMBED" },
];

const PANEL = [
  ["Assistant name", "Support assistant"],
  ["Welcome message", "Ask me anything about the docs"],
  ["Accent color", "violet"],
  ["Position", "bottom-right"],
  ["Retrieval", "enabled"],
  ["Model", "configurable"],
];

export function ChataiCustomization() {
  return (
    <Section ariaLabel="Customization">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Customization</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              Make the assistant fit your product.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              ChatAI can be configured for different websites and use cases — how the assistant
              behaves, how it looks, and how it retrieves knowledge.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <ul className="mt-9 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {POINTS.map((p) => (
                <li
                  key={p.title}
                  className="flex items-center justify-between gap-3 bg-surface px-4 py-3.5"
                >
                  <span className="text-sm">{p.title}</span>
                  <span className="nz-label">{p.meta}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-2/60 px-4 py-2.5">
              <span className="nz-label truncate">chatai / settings</span>
              <span className="nz-label shrink-0">Illustrative</span>
            </div>
            <dl className="divide-y divide-border">
              {PANEL.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 px-4 py-4">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="truncate font-mono text-xs text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
