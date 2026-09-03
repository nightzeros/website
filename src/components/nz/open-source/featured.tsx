import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  ButtonLink,
  ProjectNumber,
  ProjectStatus,
  Reveal,
  Section,
  SectionLabel,
  TextLink,
} from "../primitives";
import { DiagramPanel } from "../diagram-panel";
import { CTA, CHATAI } from "../projects-data";

const NODES = [
  { label: "GitHub repository", meta: "SOURCE" },
  { label: "ChatAI core", meta: CHATAI.number, accent: true },
  { label: "Hosted app / Self-host", meta: "RUNTIME" },
  { label: "React / SDK / Widget", meta: "PACKAGES" },
];

export function OpenSourceFeatured() {
  return (
    <Section ariaLabel="Featured open source project">
      <Reveal>
        <SectionLabel>Featured Open Source Project</SectionLabel>
      </Reveal>
      <Reveal delay={40}>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-6">
          <ProjectNumber />
          <ProjectStatus />
          <span className="nz-label">Open Source</span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <h2 className="font-mono text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {CHATAI.name}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="nz-h3 mt-6">
              Your knowledge. Your AI. <span className="nz-accent-text">Anywhere.</span>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="nz-lead mt-6 max-w-lg sm:text-lg">{CHATAI.description}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={CHATAI.githubUrl} external>
                {CTA.viewOnGitHub}
                <ArrowUpRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href={CHATAI.pageUrl} variant="ghost">
                {CTA.exploreChatAI}
                <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-6 flex flex-wrap gap-6">
              <TextLink href={CHATAI.docsUrl} external>
                {CTA.documentation}
              </TextLink>
              <TextLink href={CHATAI.appUrl} external>
                {CTA.openChatAI}
              </TextLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <DiagramPanel
            title="nightzeros / chatai"
            subtitle="Open ecosystem"
            nodes={NODES}
          />
        </Reveal>
      </div>
    </Section>
  );
}
