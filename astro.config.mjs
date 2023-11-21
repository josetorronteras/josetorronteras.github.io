import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://josetorronteras.es",
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sentry({
      dsn: "https://85fdb807f0dccd1f13b7b865a6c3ebd4@o206307.ingest.sentry.io/4506266192314368",
      sourceMapsUploadOptions: {
        project: "josetorronteras",
        authToken: import.meta.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
  compressHTML: true,
});
