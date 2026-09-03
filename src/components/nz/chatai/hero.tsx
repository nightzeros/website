import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  ButtonLink,
  Glow,
  GridBackground,
  ProjectStatus,
  Reveal,
  Tag,
  TextLink,
} from "../primitives";
import { CTA, CHATAI } from "../projects-data";

const LAYERS = [
  { label: "Knowledge", meta: "SOURCES", items: ["Documents", "Text", "Site content"] },
  { label: "Retrieval", meta: "RAG", items: ["Embed", "Index", "Search"] },
  { label: "ChatAI", meta: CHATAI.number, items: ["Context", "Model", "Stream"] },
  { label: "Delivery", meta: "OUTPUT", items: ["Website", "React", "SDK"] },
];

function Connector() {
  return (
    <div aria-hidden className="flex justify-center py-2">
      <svg width="2" height="22" viewBox="0 0 2 22" className="text-violet/70">
        <line
          className="nz-flow"
          x1="1"
          y1="0"
          x2="1"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export function ChataiArchitecture() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-5 sm:p-7">
      <Glow className="-right-20 -top-20 size-64" />
      <div className="relative flex flex-wrap items-center justify-between gap-2">
        <span className="nz-label">Architecture</span>
        <span className="nz-label">{CHATAI.pipelineLabel}</span>
      </div>
      <ol className="relative mt-6">
        {LAYERS.map((layer, i) => (
          <li key={layer.label}>
            <div className="group nz-surface-hover rounded-lg border border-border bg-surface-2/70 px-4 py-4 hover:border-violet/50">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{layer.label}</span>
                <span className="nz-label">{layer.meta}</span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {layer.items.map((item) => (
                  <li key={item} className="font-mono text-[0.7rem] text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i < LAYERS.length - 1 ? <Connector /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ChataiHero() {
  return (
    <section
      aria-label="ChatAI overview"
      className="relative overflow-hidden border-b border-border px-5 pb-24 pt-32 sm:px-8 md:pb-32 md:pt-40"
    >
      <GridBackground />
      <Glow className="nz-drift -left-24 top-10 size-[28rem] max-w-[90vw]" />
      <div className="nz-container relative grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-20">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="nz-label text-foreground/70">NightZeros / {CHATAI.number}</span>
              <Tag>Open Source</Tag>
              <ProjectStatus />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-8 font-mono text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              {CHATAI.name}
            </h1>
          </Reveal>
          <Reveal delay={110}>
            <p className="nz-h3 mt-6">
              Your knowledge. Your AI. <span className="nz-accent-text">Anywhere.</span>
            </p>
          </Reveal>
          <Reveal delay={170}>
            <p className="nz-lead mt-7 max-w-xl sm:text-lg">
              Build AI assistants grounded in your own knowledge and embed them into websites and
              applications.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={CHATAI.appUrl} external>
                {CTA.openChatAI}
                <ArrowUpRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href={CHATAI.docsUrl} variant="ghost" external>
                {CTA.documentation}
                <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <TextLink href={CHATAI.githubUrl} external className="mt-6">
              {CTA.viewOnGitHub}
              <ArrowUpRight aria-hidden className="size-3.5" />
            </TextLink>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ChataiArchitecture />
        </Reveal>
      </div>
    </section>
  );
}
