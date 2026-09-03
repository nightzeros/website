/// <reference types="vite/client" />
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { NotFoundPage } from "@/components/nz/not-found";
import { SiteJsonLd } from "@/components/nz/json-ld";
import { SITE } from "@/components/nz/projects-data";
import { OG_IMAGE } from "@/lib/seo";

function rootVerificationMeta() {
  const meta: Array<Record<string, string>> = [];
  const google = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
  const bing = import.meta.env.VITE_BING_SITE_VERIFICATION as string | undefined;
  if (google?.trim()) meta.push({ name: "google-site-verification", content: google.trim() });
  if (bing?.trim()) meta.push({ name: "msvalidate.01", content: bing.trim() });
  return meta;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0f0f12" },
      {
        name: "description",
        content: `${SITE.name} builds ${SITE.positioning.toLowerCase()}`,
      },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: OG_IMAGE.url },
      { property: "og:image:type", content: OG_IMAGE.type },
      { property: "og:image:width", content: String(OG_IMAGE.width) },
      { property: "og:image:height", content: String(OG_IMAGE.height) },
      { property: "og:image:alt", content: OG_IMAGE.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE.url },
      { name: "twitter:image:alt", content: OG_IMAGE.alt },
      ...rootVerificationMeta(),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLMs.txt" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFoundPage,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <style
          dangerouslySetInnerHTML={{
            __html: `
.nz-scroll-rise{opacity:0;transform:translateY(28px)}
.nz-scroll-fade{opacity:0}
.nz-scroll-rise.nz-io-shown{animation:nz-scroll-rise-kf .85s cubic-bezier(.16,1,.3,1) both}
.nz-scroll-fade.nz-io-shown{animation:nz-scroll-fade-kf .7s cubic-bezier(.16,1,.3,1) both}
@keyframes nz-scroll-rise-kf{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@keyframes nz-scroll-fade-kf{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce),(scripting:none){.nz-scroll-rise,.nz-scroll-fade{opacity:1!important;transform:none!important;animation:none!important}}
`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="nz-skip-link nz-skip-link-focus">
          Skip to content
        </a>
        <SiteJsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function n(){var el=document.querySelector(".nz-nav");if(!el)return;el.classList.toggle("nz-nav-solid",window.scrollY>10)}n();addEventListener("scroll",n,{passive:true})})()`,
          }}
        />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
