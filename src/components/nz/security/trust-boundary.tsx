import { Glow, Reveal, Section, SectionLabel } from "../primitives";

const NODES = [
  { label: "Public website", meta: "BROWSER" },
  { label: "ChatAI widget / React package", meta: "CLIENT" },
  { label: "Public assistant identifier", meta: "PUBLIC ID" },
  { label: "NightZeros / ChatAI server", meta: "TRUSTED" },
  { label: "Security policy", meta: "ENFORCE" },
  { label: "Provider credentials", meta: "SECRETS" },
  { label: "AI provider", meta: "EXTERNAL" },
];

export function SecurityTrustBoundary() {
  return (
    <Section ariaLabel="Trust boundary" className="bg-surface/40">
      <Reveal>
        <SectionLabel>Trust Boundary</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Secrets stay on the server.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <Reveal delay={80}>
          <div className="relative overflow-hidden rounded-xl border border-border bg-background p-6 sm:p-8">
            <Glow className="-right-16 -top-16 size-56" />
            <div className="relative flex items-center justify-between gap-3">
              <span className="nz-label">Request path</span>
              <span className="nz-label">Browser → Server</span>
            </div>
            <ol className="relative mt-8 space-y-3">
              {NODES.map((node, i) => (
                <li key={node.label}>
                  <div
                    className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3.5 ${
                      i >= 3
                        ? "border-violet/45 bg-violet/[0.06]"
                        : "border-border bg-surface-2/70"
                    }`}
                  >
                    <span className="text-sm font-medium">{node.label}</span>
                    <span className="nz-label shrink-0">{node.meta}</span>
                  </div>
                  {i < NODES.length - 1 ? (
                    <div aria-hidden className="flex justify-center py-1">
                      <svg width="2" height="16" viewBox="0 0 2 16" className="text-violet/65">
                        <line
                          className="nz-flow"
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="max-w-md border-l border-violet/40 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Provider API keys, encryption keys, billing secrets, and privileged server credentials
            must never be shipped inside public browser packages.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
