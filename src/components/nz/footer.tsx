import { NZMark } from "./primitives";
import { LINKS } from "./links";
import { SITE } from "./projects-data";

const COLUMNS = [
  {
    title: "Projects",
    links: [
      { label: "All Projects", href: LINKS.projects },
      { label: "ChatAI", href: LINKS.chatai },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "GitHub", href: LINKS.github, external: true },
      { label: "Documentation", href: LINKS.docs, external: true },
      { label: "npm", href: LINKS.npm, external: true },
      { label: "Open Source", href: LINKS.openSource },
    ],
  },
  {
    title: "NightZeros",
    links: [
      { label: "About", href: LINKS.about },
      { label: "Security", href: LINKS.security },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-16 sm:px-8">
      <div className="nz-container grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
        <div>
          <a
            href={LINKS.home}
            className="inline-flex items-center gap-3"
            aria-label="NightZeros home"
          >
            <NZMark />
            <span className="nz-brand">NIGHTZEROS</span>
          </a>
          <p className="mt-6 text-sm font-medium text-foreground">{SITE.brandStatement}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {SITE.positioning.replace(/\.$/, "")} for people who build.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="nz-label">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="nz-container mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <span className="nz-label">© 2026 NightZeros</span>
        <span className="nz-label">Built in the open.</span>
      </div>
    </footer>
  );
}
