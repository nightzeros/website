import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  ButtonLink,
  ProjectNumber,
  ProjectStatus,
  Reveal,
  Section,
  TextLink,
} from "./primitives";
import { DiagramPanel } from "./diagram-panel";
import { CTA, CHATAI } from "./projects-data";

const NODES = [
  { label: "Documents", meta: "INPUT" },
  { label: "Knowledge", meta: "INDEX" },
  { label: "Retrieval", meta: "RAG" },
  { label: "Assistant", meta: "CHATAI", accent: true },
  { label: "React", meta: "SDK" },
  { label: "Website", meta: "OUTPUT" },
];

export function FeaturedProject() {
  return (
    <Section id="featured" ariaLabel="Featured project: ChatAI">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-6">
          <ProjectNumber />
          <span className="nz-label">Featured Project</span>
          <ProjectStatus />
          <span className="nz-label">Open Source</span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {CHATAI.name}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="nz-h3 mt-6">
              {CHATAI.taglineLines[0]}
              <br />
              {CHATAI.taglineLines[1]}
              <br />
              <span className="nz-accent-text">{CHATAI.taglineLines[2]}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="nz-lead mt-8 max-w-lg sm:text-lg">{CHATAI.description}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={CHATAI.pageUrl}>
                {CTA.exploreChatAI}
                <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href={CHATAI.appUrl} variant="ghost" external>
                {CTA.openChatAI}
                <ArrowUpRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-6 flex flex-wrap gap-6">
              <TextLink href={CHATAI.docsUrl} external>
                {CTA.documentation}
              </TextLink>
              <TextLink href={CHATAI.githubUrl} external>
                GitHub
              </TextLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <DiagramPanel
            title={CHATAI.architectureLabel}
            subtitle={CHATAI.pipelineLabel}
            nodes={NODES}
          />
        </Reveal>
      </div>
    </Section>
  );
}
