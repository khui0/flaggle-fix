// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/flaggle-fix/",
    head: {
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Flaggle` : "Flaggle";
      },
      meta: [
        {
          name: "description",
          content: "Flag guessing game",
        },
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-title", property: "og:title", content: "Flaggle" },
        {
          hid: "og-desc",
          property: "og:description",
          content: "Flag guessing game",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://andydeforest.github.io/flagle/meta.jpg",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "favicon.png" }],
    },
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/scss/app.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData:
            '@import "~/assets/scss/mixins.scss"; @import "~/assets/scss/settings.scss";',
        },
      },
    },
  },
  modules: [
    "@nuxtjs/device",
    "@nuxtjs/google-fonts",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  device: {
    refreshOnResize: true,
  },
  googleFonts: {
    families: {
      Raleway: [400, 600, 700, 800],
    },
    display: "swap",
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
  imports: {
    dirs: ["stores"],
  },
});
