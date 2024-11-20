// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      APP_BASE_URI: process.env.NUXT_PUBLIC_APP_BASE_URI,
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "DM Serif Text": true,
          Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          "Kumbh Sans": "100..900",
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/apollo",
    "@stefanobartoletti/nuxt-social-share",
  ],
  app: {
    head: {
      titleTemplate: "%s | Vuemiem",
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URI || "http://localhost:1337/graphql",
      },
    },
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "resources",
        path: "/zasoby",
        file: "~/pages/resources/index.vue",
      });
    },
  },
});
