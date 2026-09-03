import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, Section, SectionLabel, TextLink } from "./primitives";
import { CodeBlock, CodeWindow } from "./code-window";
import { LINKS } from "./links";
import { cn } from "@/lib/utils";

const TABS = ["React", "JavaScript", "SDK"] as const;
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

const JS_CODE = `<script
  src="https://app.nightzeros.com/widget/chat.js"
  data-assistant-id="your_public_assistant_id"
  async
></script>`;

const SDK_CODE = `import { ChatAI } from "@nightzeros/chatai-sdk";`;

export function InstallSection() {
  const [tab, setTab] = useState<Tab>("React");

  return (
    <Section ariaLabel="Developer installation">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Reveal>
            <SectionLabel>Developer Experience</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 nz-h2">
              Install it your way.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
              A hosted script for any site, a React component for app frameworks, or the SDK when
              you want full control.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <TextLink href={LINKS.docs} external className="mt-8">
              Read the documentation
              <ArrowRight aria-hidden className="size-3.5" />
            </TextLink>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <CodeWindow
            title={`chatai / ${tab.toLowerCase()}`}
            toolbar={
              <div role="tablist" aria-label="Installation method" className="flex gap-1">
                {TABS.map((t) => (
                  <button
                    key={t}
                    role="tab"
                    type="button"
                    aria-selected={tab === t}
                    onClick={() => setTab(t)}
                    className={cn(
                      "rounded px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-colors",
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
            <div className="divide-y divide-border">
              {tab === "React" ? (
                <>
                  <CodeBlock prompt code="pnpm add @nightzeros/chatai-react" />
                  <CodeBlock code={REACT_CODE} />
                </>
              ) : null}
              {tab === "JavaScript" ? <CodeBlock code={JS_CODE} /> : null}
              {tab === "SDK" ? (
                <>
                  <CodeBlock prompt code="pnpm add @nightzeros/chatai-sdk" />
                  <CodeBlock code={SDK_CODE} />
                </>
              ) : null}
            </div>
          </CodeWindow>
        </Reveal>
      </div>
    </Section>
  );
}
