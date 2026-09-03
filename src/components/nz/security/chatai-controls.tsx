import { Reveal, Section, SectionLabel } from "../primitives";

const CONTROLS = [
  {
    title: "Domain allowlists",
    body: "Restrict where an assistant may be embedded.",
  },
  {
    title: "Widget rate limiting",
    body: "Limit request volume at the visitor and assistant level.",
  },
  {
    title: "Bot heuristics",
    body: "Detect and reject some obviously automated or abusive traffic patterns.",
  },
  {
    title: "Optional widget signing",
    body: "Add request-signing controls for installations that need stronger verification.",
  },
  {
    title: "Encrypted provider secrets",
    body: "Provider credentials are stored server-side and encrypted rather than exposed to browser integrations.",
  },
  {
    title: "Audit events",
    body: "Sensitive configuration and important operator actions can be recorded for review.",
  },
  {
    title: "Privacy controls",
    body: "Conversation persistence and retention can be configured separately from security enforcement.",
  },
];

export function SecurityChatAIControls() {
  return (
    <Section ariaLabel="ChatAI security controls">
      <Reveal>
        <SectionLabel>NZ/001 / ChatAI</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-8 max-w-2xl nz-h2">
          Security controls for public AI embeds.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          ChatAI is designed to be embedded on public websites, so the project includes controls
          intended to reduce abuse and protect server-side configuration.
        </p>
      </Reveal>

      <ul className="mt-14 border-t border-border">
        {CONTROLS.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 80}>
              <div className="grid gap-2 border-b border-border py-6 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] sm:gap-10">
                <h3 className="text-base font-medium tracking-[-0.01em]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal delay={120}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          These controls are designed to reduce avoidable exposure. They do not eliminate all abuse
          or every possible risk.
        </p>
      </Reveal>
    </Section>
  );
}
