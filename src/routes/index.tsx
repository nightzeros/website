import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nz/navbar";
import { Hero } from "@/components/nz/hero";
import { ManifestoSection } from "@/components/nz/manifesto-section";
import { FeaturedProject } from "@/components/nz/featured-project";
import { FeatureGrid } from "@/components/nz/feature-grid";
import { HowItWorks } from "@/components/nz/how-it-works";
import { InstallSection } from "@/components/nz/install-section";
import { OpenSourceSection } from "@/components/nz/open-source-section";
import { FocusSection } from "@/components/nz/focus-section";
import { ProjectsSection } from "@/components/nz/projects-section";
import { FinalCta } from "@/components/nz/final-cta";
import { Footer } from "@/components/nz/footer";
import { pageMeta } from "@/lib/seo";
import { CHATAI, SITE } from "@/components/nz/projects-data";

const TITLE = "NightZeros — Open-source AI & Developer Tools";
const DESCRIPTION = `${SITE.name} is an independent studio building ${SITE.positioning.toLowerCase()} ${CHATAI.number} — ${CHATAI.name}: AI assistants grounded in your own knowledge.`;

export const Route = createFileRoute("/")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main">
        <Hero />
        <ManifestoSection />
        <FeaturedProject />
        <FeatureGrid />
        <HowItWorks />
        <InstallSection />
        <OpenSourceSection />
        <FocusSection />
        <ProjectsSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
