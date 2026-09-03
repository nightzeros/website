import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nz/navbar";
import { Footer } from "@/components/nz/footer";
import { LINKS } from "@/components/nz/links";
import { CTA } from "@/components/nz/projects-data";
import { OpenSourceHero } from "@/components/nz/open-source/hero";
import { OpenSourcePrinciples } from "@/components/nz/open-source/principles";
import { OpenSourceFeatured } from "@/components/nz/open-source/featured";
import { OpenSourceEcosystem } from "@/components/nz/open-source/ecosystem";
import { OpenSourceSelfHost } from "@/components/nz/open-source/self-host";
import { OpenSourceContribute } from "@/components/nz/open-source/contribute";
import { OpenSourceSecurity } from "@/components/nz/open-source/security";
import { OpenSourceDocs } from "@/components/nz/open-source/docs";
import { OpenSourceTransparency } from "@/components/nz/open-source/transparency";
import { OpenSourceMore } from "@/components/nz/open-source/more";
import { OpenSourceFinalCta } from "@/components/nz/open-source/final-cta";
import { pageMeta } from "@/lib/seo";

const TITLE = "Open Source — NightZeros";
const DESCRIPTION =
  "NightZeros builds in the open. Explore ChatAI source, documentation, packages, self-hosting, and how to contribute.";

export const Route = createFileRoute("/open-source")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/open-source" }),
  component: OpenSourcePage,
});

function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar ctaLabel={CTA.viewOnGitHub} ctaHref={LINKS.github} ctaExternal />
      <main id="main">
        <OpenSourceHero />
        <OpenSourcePrinciples />
        <OpenSourceFeatured />
        <OpenSourceEcosystem />
        <OpenSourceSelfHost />
        <OpenSourceContribute />
        <OpenSourceSecurity />
        <OpenSourceDocs />
        <OpenSourceTransparency />
        <OpenSourceMore />
        <OpenSourceFinalCta />
      </main>
      <Footer />
    </div>
  );
}
