import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nz/navbar";
import { Footer } from "@/components/nz/footer";
import { LINKS } from "@/components/nz/links";
import { CTA, CHATAI } from "@/components/nz/projects-data";
import { ChataiHero } from "@/components/nz/chatai/hero";
import { ChataiPreview } from "@/components/nz/chatai/preview";
import { ChataiWhatItDoes } from "@/components/nz/chatai/what-it-does";
import { ChataiWorkflow } from "@/components/nz/chatai/workflow";
import { ChataiKnowledge } from "@/components/nz/chatai/knowledge";
import { ChataiIntegrations } from "@/components/nz/chatai/integrations";
import { ChataiCustomization } from "@/components/nz/chatai/customization";
import { ChataiSecurity } from "@/components/nz/chatai/security";
import { ChataiPrivacy } from "@/components/nz/chatai/privacy";
import { ChataiSelfHost } from "@/components/nz/chatai/self-host";
import { ChataiPackages } from "@/components/nz/chatai/packages";
import { ChataiOpenSource } from "@/components/nz/chatai/open-source";
import { ChataiFinalCta } from "@/components/nz/chatai/final-cta";
import { pageMeta } from "@/lib/seo";

const TITLE = "ChatAI — Open-source AI Assistants by NightZeros";
const DESCRIPTION = CHATAI.description;

export const Route = createFileRoute("/chatai")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/chatai" }),
  component: ChataiPage,
});

function ChataiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar ctaLabel={CTA.openChatAI} ctaHref={LINKS.app} ctaExternal />
      <main id="main">
        <ChataiHero />
        <ChataiPreview />
        <ChataiWhatItDoes />
        <ChataiWorkflow />
        <ChataiKnowledge />
        <ChataiIntegrations />
        <ChataiCustomization />
        <ChataiSecurity />
        <ChataiPrivacy />
        <ChataiSelfHost />
        <ChataiPackages />
        <ChataiOpenSource />
        <ChataiFinalCta />
      </main>
      <Footer />
    </div>
  );
}
