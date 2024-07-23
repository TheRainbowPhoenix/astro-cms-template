// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from "vite";
import { defineConfig } from "astro/config";

export const config = {
  output: "static",
  site: 'https://therainbowphoenix.github.io',
  base: 'astro-cms-template',
  integrations: []
}

// https://astro.build/config
export default defineConfig(config);