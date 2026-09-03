import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/nz/not-found";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/404")({
  head: () =>
    pageMeta({
      title: "404 — NightZeros",
      description: "That page does not exist on the NightZeros site.",
      path: "/404",
    }),
  component: NotFoundPage,
});
