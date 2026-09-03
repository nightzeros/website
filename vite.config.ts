import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import fs from "node:fs";
import path from "node:path";

/** Serve /public files before TanStack Start catch-all SSR. */
function publicAssetsFirst(): Plugin {
  const publicDir = path.resolve("public");
  const types: Record<string, string> = {
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".ico": "image/x-icon",
    ".css": "text/css; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".webmanifest": "application/manifest+json",
    ".json": "application/json",
  };

  return {
    name: "nz-public-assets-first",
    enforce: "pre",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        try {
          const raw = req.url?.split("?")[0] ?? "";
          if (!raw || raw === "/") return next();
          const rel = decodeURIComponent(raw.replace(/^\/+/, ""));
          if (!rel || rel.includes("..")) return next();
          const filePath = path.join(publicDir, rel);
          if (!filePath.startsWith(publicDir)) return next();
          if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return next();
          const ext = path.extname(filePath).toLowerCase();
          res.statusCode = 200;
          res.setHeader("Content-Type", types[ext] || "application/octet-stream");
          res.setHeader("Cache-Control", "public, max-age=86400");
          fs.createReadStream(filePath).pipe(res);
        } catch {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [
    publicAssetsFirst(),
    tailwindcss(),
    tanstackStart(),
    react(),
    tsConfigPaths(),
    nitro(),
  ],
});
