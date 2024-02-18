// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Mouli Bheemaneti - Personal Website",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "description", content: "Mouli Bheemaneti is on a journey for versatility." },
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        {
          // https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/?utm_source=lighthouse&utm_medium=devtools
          href: "manifest.json",
          rel: "manifest",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/robots",
    "@nuxt/image",
  ],

  robots: {
    UserAgent: "*",
    Disallow: "/",
    BlankLine: true,
    Comment: "Comment here",
  },

  nitro: {
    compressPublicAssets: true,
  },

  css: [
    "~/assets/scss/app.scss",
  ],
})
