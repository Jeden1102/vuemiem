// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      APP_BASE_URI: process.env.NUXT_PUBLIC_APP_BASE_URI,
      APP_BACKEND_BASE_URI: process.env.NUXT_PUBLIC_BACKEND_BASE_URI,
    },
  },
  build: {
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
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
    "@nuxt/image",
    "nuxt-mail",
  ],
  mail: {
    message: {
      to: process.env.MAIL_USER_TO,
    },
    smtp: {
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER_FROM,
        pass: process.env.MAIL_USER_PWD,
      },
    },
  },
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
      pages.push(
        {
          name: "resources",
          path: "/zasoby",
          file: "~/pages/resources/index.vue",
        },
        {
          name: "contact",
          path: "/kontakt",
          file: "~/pages/contact.vue",
        },
        {
          name: "terms",
          path: "/regulamin",
          file: "~/pages/terms-and-conditions.vue",
        },
        {
          name: "privacy-policy",
          path: "/polityka-prywatnosci",
          file: "~/pages/privacy-policy.vue",
        },
      );
    },
  },
});
