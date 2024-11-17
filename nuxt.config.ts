// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: "100..900",
          "Kumbh Sans": "100..900",
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/apollo",
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
});
