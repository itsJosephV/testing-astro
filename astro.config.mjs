// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  integrations: [react()],

  env: {
    schema: {
      RANDOM_N: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  adapter: vercel(),
});