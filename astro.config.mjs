import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
