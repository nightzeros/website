import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nz/navbar";
import { Footer } from "@/components/nz/footer";
import { LINKS } from "@/components/nz/links";
import { CTA, CHATAI } from "@/components/nz/projects-data";
import { ProjectsHero } from "@/components/nz/projects/hero";
import { FeaturedChatAI } from "@/components/nz/projects/featured-chatai";
import { ProjectDetails } from "@/components/nz/projects/project-details";
import { DeveloperEcosystem } from "@/components/nz/projects/developer-ecosystem";
import { ProjectsOpenSource } from "@/components/nz/projects/open-source";
import { MoreToCome } from "@/components/nz/projects/more-to-come";
import { ProjectsFinalCta } from "@/components/nz/projects/final-cta";
import { pageMeta } from "@/lib/seo";

const TITLE = "Projects — NightZeros";
const DESCRIPTION = `Explore what NightZeros is building. ${CHATAI.number} — ${CHATAI.name}: ${CHATAI.description}`;

export const Route = createFileRoute("/projects")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/projects" }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar ctaLabel={CTA.exploreChatAI} ctaHref={LINKS.chatai} />
      <main id="main">
        <ProjectsHero />
        <FeaturedChatAI />
        <ProjectDetails />
        <DeveloperEcosystem />
        <ProjectsOpenSource />
        <MoreToCome />
        <ProjectsFinalCta />
      </main>
      <Footer />
    </div>
  );
}
