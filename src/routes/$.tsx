import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/nz/not-found";
import { pageMeta } from "@/lib/seo";

/**
 * Catch-all for unknown marketing paths.
 * Public assets in /public must be served before this route (see vite plugin).
 */
export const Route = createFileRoute("/$")({
  head: () =>
    pageMeta({
      title: "404 — NightZeros",
      description: "That page does not exist on the NightZeros site.",
      path: "/404",
    }),
  component: NotFoundPage,
});
