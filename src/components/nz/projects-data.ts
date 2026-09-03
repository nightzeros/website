import { LINKS, PACKAGES } from "./links";

export const SITE = {
  name: "NightZeros",
  positioning: "Open-source AI and developer tools.",
  brandStatement: "Build beyond the obvious.",
  url: "https://nightszeros.com",
} as const;

export const CHATAI = {
  number: "NZ/001",
  name: "ChatAI",
  tagline: "Your knowledge. Your AI. Anywhere.",
  taglineLines: ["Your knowledge.", "Your AI.", "Anywhere."] as const,
  description:
    "An open-source platform for building AI assistants grounded in your own knowledge and embedding them into websites and applications.",
  status: "STATUS / ACTIVE",
  openSource: true,
  architectureLabel: "Architecture / NZ/001",
  pipelineLabel: "Knowledge → RAG → ChatAI → Web",
  appUrl: LINKS.app,
  docsUrl: LINKS.docs,
  githubUrl: LINKS.githubChatai,
  pageUrl: LINKS.chatai,
  packages: PACKAGES,
} as const;

export const CTA = {
  exploreProjects: "Explore Projects",
  exploreChatAI: "Explore ChatAI",
  openChatAI: "Open ChatAI",
  viewOnGitHub: "View on GitHub",
  documentation: "Documentation",
  readTheDocs: "Read the docs",
  viewSecurityPolicy: "View security policy",
} as const;
