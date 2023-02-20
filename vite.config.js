import { sveltekit } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-node";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  kit: {
    adapter: adapter({ out: "build" }),
  },
};

export default config;
