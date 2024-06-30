import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_TOKEN } =
  loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: true,
      studioBasePath: "/admin",
      apiVersion: "2023-03-20",
      token: SANITY_API_TOKEN,
    }),
    react(),
  ],
  output: "hybrid",
  adapter: vercel(),
});
