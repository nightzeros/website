import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  ButtonLink,
  Reveal,
  Section,
  SectionLabel,
  TextLink,
} from "../primitives";
import { CTA, CHATAI } from "../projects-data";

export function AboutNow() {
  return (
    <Section ariaLabel="Current flagship">
      <Reveal>
        <SectionLabel>Now</SectionLabel>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="nz-h2 mt-8 max-w-2xl">The first project is already live.</h2>
      </Reveal>

      <Reveal delay={110}>
        <div className="mt-14 max-w-2xl border-t border-border pt-10">
          <p className="nz-label text-foreground/70">
            {CHATAI.number} — {CHATAI.name}
          </p>
          <p className="nz-lead mt-6 sm:text-lg">{CHATAI.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={CHATAI.pageUrl}>
              {CTA.exploreChatAI}
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href={CHATAI.appUrl} variant="ghost" external>
              {CTA.openChatAI}
              <ArrowUpRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <TextLink href={CHATAI.docsUrl} external>
              {CTA.documentation}
            </TextLink>
            <TextLink href={CHATAI.githubUrl} external>
              {CTA.viewOnGitHub}
            </TextLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
