import { organizationJsonLd, softwareApplicationJsonLd, websiteJsonLd } from "@/lib/seo";

export function SiteJsonLd() {
  const graphs = [organizationJsonLd(), websiteJsonLd(), softwareApplicationJsonLd()];

  return (
    <>
      {graphs.map((data) => (
        <script
          key={String((data as { "@type"?: string })["@type"] ?? "ld")}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
