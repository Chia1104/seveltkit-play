import autoAdapter from "@sveltejs/adapter-auto";
import nodeAdapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { VERCEL_URL } from "$env/static/private";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: VERCEL_URL ? autoAdapter() : nodeAdapter({ out: "build" }),
  },
};

export default config;
