import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "../primitives";
import { CodeBlock, CodeWindow } from "../code-window";
import { LINKS } from "../links";
import { cn } from "@/lib/utils";

const TABS = ["React", "Script embed", "SDK", "Self-host"] as const;
type Tab = (typeof TABS)[number];

const REACT_CODE = `"use client";

import { ChatWidget } from "@nightzeros/chatai-react";

export function SupportChat() {
  return (
    <ChatWidget
      assistantId="your_public_assistant_id"
      apiUrl="https://app.nightzeros.com"
    />
  );
}`;

const SCRIPT_CODE = `<script
  src="https://app.nightzeros.com/widget/chat.js"
  data-assistant-id="your_public_assistant_id"
  async
></script>`;

const SDK_CODE = `import { ChatAI } from "@nightzeros/chatai-sdk";`;

export function ChataiIntegrations() {
  const [tab, setTab] = useState<Tab>("React");
  const id = useId();

  return (
    <Section ariaLabel="Developer integrations" className="bg-surface/40">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Reveal>
            <SectionLabel>Developers</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              Use ChatAI from your stack.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-muted-foreground">
              A hosted script for any site, a React component for app frameworks, the SDK when you
              want full control — or run the whole thing yourself.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <TextLink href={LINKS.docs} external className="mt-8">
              Read the docs
              <ArrowUpRight aria-hidden className="size-3.5" />
            </TextLink>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <CodeWindow
            title={`chatai / ${tab.toLowerCase()}`}
            toolbar={
              <div role="tablist" aria-label="Integration method" className="flex gap-1">
                {TABS.map((t) => (
                  <button
                    key={t}
                    role="tab"
                    type="button"
                    id={`${id}-tab-${t}`}
                    aria-selected={tab === t}
                    aria-controls={`${id}-panel`}
                    onClick={() => setTab(t)}
                    className={cn(
                      "rounded px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] transition-colors sm:text-[0.7rem]",
                      tab === t
                        ? "bg-foreground/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            }
          >
            <div
              id={`${id}-panel`}
              role="tabpanel"
              aria-labelledby={`${id}-tab-${tab}`}
              className="divide-y divide-border"
            >
              {tab === "React" ? (
                <>
                  <CodeBlock prompt code="pnpm add @nightzeros/chatai-react" />
                  <CodeBlock code={REACT_CODE} />
                </>
              ) : null}
              {tab === "Script embed" ? <CodeBlock code={SCRIPT_CODE} /> : null}
              {tab === "SDK" ? (
                <>
                  <CodeBlock prompt code="pnpm add @nightzeros/chatai-sdk" />
                  <CodeBlock code={SDK_CODE} />
                </>
              ) : null}
              {tab === "Self-host" ? (
                <div className="px-4 py-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Deploy ChatAI using infrastructure you control.
                  </p>
                  <TextLink href={LINKS.docs} external className="mt-5">
                    Read the docs
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </TextLink>
                </div>
              ) : null}
            </div>
          </CodeWindow>
        </Reveal>
      </div>
    </Section>
  );
}
