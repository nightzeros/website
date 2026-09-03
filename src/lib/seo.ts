import { SITE, CHATAI } from "@/components/nz/projects-data";
import { LINKS } from "@/components/nz/links";

export const OG_IMAGE = {
  url: `${SITE.url}/og.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "NightZeros — Build beyond the obvious.",
} as const;

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
};

function verificationMeta() {
  const meta: Array<Record<string, string>> = [];
  const google = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
  const bing = import.meta.env.VITE_BING_SITE_VERIFICATION as string | undefined;
  if (google?.trim()) meta.push({ name: "google-site-verification", content: google.trim() });
  if (bing?.trim()) meta.push({ name: "msvalidate.01", content: bing.trim() });
  return meta;
}

export function pageMeta({ title, description, path = "/" }: PageMetaInput) {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:image", content: OG_IMAGE.url },
      { property: "og:image:secure_url", content: OG_IMAGE.url },
      { property: "og:image:type", content: OG_IMAGE.type },
      { property: "og:image:width", content: String(OG_IMAGE.width) },
      { property: "og:image:height", content: String(OG_IMAGE.height) },
      { property: "og:image:alt", content: OG_IMAGE.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE.url },
      { name: "twitter:image:alt", content: OG_IMAGE.alt },
      ...verificationMeta(),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.positioning,
    slogan: SITE.brandStatement,
    logo: `${SITE.url}/favicon-192.png`,
    sameAs: [LINKS.github, LINKS.npm, LINKS.docs],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.positioning,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    inLanguage: "en-US",
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: CHATAI.name,
    alternateName: CHATAI.number,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: `${SITE.url}${CHATAI.pageUrl}`,
    description: CHATAI.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isAccessibleForFree: true,
    codeRepository: CHATAI.githubUrl,
    downloadUrl: LINKS.npm,
    softwareHelp: CHATAI.docsUrl,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}
