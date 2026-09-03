import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nz/navbar";
import { Footer } from "@/components/nz/footer";
import { AboutHero } from "@/components/nz/about/hero";
import { AboutWhatWeAre } from "@/components/nz/about/what-we-are";
import { AboutWhy } from "@/components/nz/about/why";
import { AboutFocus } from "@/components/nz/about/focus";
import { AboutPrinciples } from "@/components/nz/about/principles";
import { AboutTheName } from "@/components/nz/about/the-name";
import { AboutProjectSystem } from "@/components/nz/about/project-system";
import { AboutNow } from "@/components/nz/about/now";
import { AboutOpenSource } from "@/components/nz/about/open-source";
import { AboutNext } from "@/components/nz/about/next";
import { AboutClosing } from "@/components/nz/about/closing";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/components/nz/projects-data";

const TITLE = "About — NightZeros";
const DESCRIPTION = `${SITE.name} is an independent software studio building ${SITE.positioning.toLowerCase().replace(/\.$/, "")} from zero.`;

export const Route = createFileRoute("/about")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/about" }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main">
        <AboutHero />
        <AboutWhatWeAre />
        <AboutWhy />
        <AboutFocus />
        <AboutPrinciples />
        <AboutTheName />
        <AboutProjectSystem />
        <AboutNow />
        <AboutOpenSource />
        <AboutNext />
        <AboutClosing />
      </main>
      <Footer />
    </div>
  );
}
