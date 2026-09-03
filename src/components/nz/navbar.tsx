import { useEffect, useId, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink, NZMark } from "./primitives";
import { LINKS } from "./links";
import { CTA } from "./projects-data";

const NAV = [
  { label: "Projects", href: LINKS.projects },
  { label: "ChatAI", href: LINKS.chatai },
  { label: "Open Source", href: LINKS.openSource },
  { label: "About", href: LINKS.about },
  { label: "GitHub", href: LINKS.github, external: true },
];

function navActive(href: string, pathname: string) {
  if (href.startsWith("http")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function Navbar({
  ctaLabel = CTA.exploreProjects,
  ctaHref = LINKS.projects,
  ctaExternal = false,
  homeHref = LINKS.home,
}: {
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  homeHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "nz-nav fixed inset-x-0 top-0 z-50",
        (scrolled || open) && "nz-nav-solid",
      )}
    >
      <div className="nz-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href={homeHref} className="flex min-w-0 items-center gap-3" aria-label="NightZeros home">
          <NZMark />
          <span className="nz-brand truncate">NIGHTZEROS</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                navActive(item.href, pathname) ? "text-foreground" : "text-muted-foreground",
              )}
              {...(navActive(item.href, pathname) ? { "aria-current": "page" as const } : {})}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={ctaHref} external={ctaExternal} className="h-9 px-4">
            {ctaLabel}
          </ButtonLink>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between border-b border-border py-4 text-base",
                    navActive(item.href, pathname) ? "text-foreground" : "text-foreground/80",
                  )}
                  {...(navActive(item.href, pathname) ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                  {item.external ? (
                    <Github aria-hidden className="size-4 text-muted-foreground" />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={ctaHref} external={ctaExternal} className="mt-6 w-full">
            {ctaLabel}
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
