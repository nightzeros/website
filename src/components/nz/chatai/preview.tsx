import { FileText, MessageSquare, Palette, Settings2, Upload } from "lucide-react";
import { Reveal, Section, SectionLabel } from "../primitives";

const NAV = [
  { label: "Assistant", icon: Settings2 },
  { label: "Knowledge", icon: FileText },
  { label: "Appearance", icon: Palette },
  { label: "Preview", icon: MessageSquare },
];

const FILES = [
  { name: "handbook.pdf", meta: "DOCUMENT" },
  { name: "product-guide.md", meta: "MARKDOWN" },
  { name: "docs.nightzeros.com", meta: "WEB" },
];

export function ChataiPreview() {
  return (
    <Section ariaLabel="ChatAI interface preview">
      <Reveal>
        <SectionLabel>Interface</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Set up an assistant, connect knowledge, ship it.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-14 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex min-w-0 items-center gap-3 border-b border-border bg-surface-2/60 px-4 py-2.5">
            <span aria-hidden className="flex shrink-0 gap-1.5">
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-violet/50" />
            </span>
            <span className="nz-label truncate">chatai / assistant setup</span>
            <span className="nz-label ml-auto hidden shrink-0 sm:inline">Illustrative UI</span>
          </div>

          <div className="grid gap-px bg-border lg:grid-cols-[minmax(0,13rem)_minmax(0,1.2fr)_minmax(0,1fr)]">
            <nav aria-label="Preview sections" className="bg-surface p-4">
              <ul className="flex gap-2 overflow-x-auto lg:block lg:space-y-1 lg:overflow-visible">
                {NAV.map((item, i) => (
                  <li key={item.label}>
                    <span
                      className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md px-3 py-2 text-sm ${
                        i === 0 ? "bg-surface-2 text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <item.icon aria-hidden className="size-4 text-violet/80" />
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="bg-surface p-5 sm:p-6">
              <p className="nz-label">Knowledge sources</p>
              <ul className="mt-4 space-y-2">
                {FILES.map((f) => (
                  <li
                    key={f.name}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-2/60 px-3.5 py-3"
                  >
                    <span className="truncate font-mono text-xs text-foreground/85">{f.name}</span>
                    <span className="nz-label shrink-0">{f.meta}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-border px-3.5 py-4 text-sm text-muted-foreground">
                <Upload aria-hidden className="size-4 text-violet/80" />
                Drop files to add knowledge
              </div>

              <p className="nz-label mt-7">Retrieval settings</p>
              <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                {[
                  ["Chunk size", "—"],
                  ["Top K", "—"],
                  ["Model", "configurable"],
                  ["Provider", "configurable"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-surface-2/60 px-3.5 py-3">
                    <dt className="nz-label">{k}</dt>
                    <dd className="mt-1.5 font-mono text-xs text-foreground/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-surface p-5 sm:p-6">
              <p className="nz-label">Widget preview</p>
              <div className="mt-4 rounded-xl border border-border bg-surface-2/60 p-4">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <span aria-hidden className="size-2 rounded-full bg-violet" />
                  <span className="text-sm font-medium">Support assistant</span>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="ml-auto max-w-[85%] rounded-lg rounded-br-sm border border-border bg-surface px-3 py-2 text-sm text-foreground/90">
                    How do I embed the widget?
                  </p>
                  <p className="max-w-[90%] rounded-lg rounded-bl-sm border border-violet/25 bg-violet/[0.07] px-3 py-2 text-sm text-foreground/85">
                    Add the script tag with your assistant ID, or install the React package.
                  </p>
                  <p className="nz-label">Answer grounded in your sources</p>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5">
                  <span className="text-sm text-muted-foreground">Ask a question…</span>
                  <span className="nz-label">↵</span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Illustrative interface mockup — not real production data.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
