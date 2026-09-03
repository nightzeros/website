import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nz/navbar";
import { Footer } from "@/components/nz/footer";
import { LINKS } from "@/components/nz/links";
import { CTA } from "@/components/nz/projects-data";
import { SecurityHero } from "@/components/nz/security/hero";
import { SecurityDisclosure } from "@/components/nz/security/disclosure";
import { SecurityWhenTesting } from "@/components/nz/security/when-testing";
import { SecurityChatAIControls } from "@/components/nz/security/chatai-controls";
import { SecurityTrustBoundary } from "@/components/nz/security/trust-boundary";
import { SecurityPublicEmbeds } from "@/components/nz/security/public-embeds";
import { SecurityPrivacy } from "@/components/nz/security/privacy";
import { SecuritySelfHost } from "@/components/nz/security/self-host";
import { SecurityReleases } from "@/components/nz/security/releases";
import { SecurityPolicies } from "@/components/nz/security/policies";
import { SecurityLimitations } from "@/components/nz/security/limitations";
import { SecurityFinalCta } from "@/components/nz/security/final-cta";
import { pageMeta } from "@/lib/seo";

const TITLE = "Security — NightZeros";
const DESCRIPTION =
  "How NightZeros approaches security, responsible vulnerability reporting, and ChatAI protections for public embeds.";

export const Route = createFileRoute("/security")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/security" }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar ctaLabel={CTA.viewSecurityPolicy} ctaHref={LINKS.docsSecurity} ctaExternal />
      <main id="main">
        <SecurityHero />
        <SecurityDisclosure />
        <SecurityWhenTesting />
        <SecurityChatAIControls />
        <SecurityTrustBoundary />
        <SecurityPublicEmbeds />
        <SecurityPrivacy />
        <SecuritySelfHost />
        <SecurityReleases />
        <SecurityPolicies />
        <SecurityLimitations />
        <SecurityFinalCta />
      </main>
      <Footer />
    </div>
  );
}
