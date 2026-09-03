import { Boxes, Code2, Lock, Puzzle, Server, Sparkle } from "lucide-react";
import { Reveal, Section, SectionLabel } from "./primitives";
import { CodeBlock, CodeWindow } from "./code-window";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function Card({
  title,
  body,
  icon,
  className,
  children,
}: {
  title: string;
  body?: string;
  icon: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={cn(
        "group nz-surface-hover flex flex-col rounded-xl border border-border bg-surface p-6 hover:border-violet/40 sm:p-7",
        className,
      )}
    >
      <span aria-hidden className="text-violet/80">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-medium tracking-[-0.01em]">{title}</h3>
      {body ? (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </article>
  );
}

export function FeatureGrid() {
  return (
    <Section ariaLabel="ChatAI features">
      <Reveal>
        <SectionLabel>ChatAI / Capabilities</SectionLabel>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <Card
            className="h-full"
            icon={<Sparkle className="size-5" />}
            title="Knowledge-grounded answers"
            body="Connect your knowledge and let ChatAI retrieve relevant context before generating responses."
          />
        </Reveal>
        <Reveal delay={100} className="md:col-span-2">
          <Card
            className="h-full"
            icon={<Puzzle className="size-5" />}
            title="Embed anywhere"
            body="Add ChatAI to websites using a hosted script, React component, or developer SDK."
          />
        </Reveal>

        <Reveal delay={200} className="md:col-span-3">
          <Card className="h-full" icon={<Code2 className="size-5" />} title="React integrations">
            <CodeWindow title="terminal">
              <CodeBlock prompt code="pnpm add @nightzeros/chatai-react" />
            </CodeWindow>
          </Card>
        </Reveal>
        <Reveal delay={300} className="md:col-span-3">
          <Card className="h-full" icon={<Boxes className="size-5" />} title="Developer SDK">
            <CodeWindow title="terminal">
              <CodeBlock prompt code="pnpm add @nightzeros/chatai-sdk" />
            </CodeWindow>
          </Card>
        </Reveal>

        <Reveal delay={400} className="md:col-span-2">
          <Card
            className="h-full"
            icon={<Lock className="size-5" />}
            title="Security controls"
            body="Domain controls, rate limiting, signing, and safeguards for public embeds."
          />
        </Reveal>
        <Reveal delay={500} className="md:col-span-4">
          <Card
            className="h-full"
            icon={<Server className="size-5" />}
            title="Self-hostable"
            body="Run ChatAI using infrastructure you control."
          />
        </Reveal>
      </div>
    </Section>
  );
}
