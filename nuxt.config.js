export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "AGNC - креативное коммуникационное агентство",
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Предоставляем полный спектр маркетинговых и креативных услуг брендам категории fashion, beauty и lifestyle для их развития и продвижения как на любом рынке."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "коммуникационное агентство, smm, marketing, pr, branding, agnc"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "AGNC - креативное коммуникационное агенство"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Предоставляем полный спектр маркетинговых и креативных услуг"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/ogImg.png"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/base.css",
    "reseter.css",
    "~/assets/styles/main.css",
    "vue-multiselect/dist/vue-multiselect.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    [
      "nuxt-mail",
      {
        message: {
          to: "studioagnc_redirect@mail.ru"
        },
        smtp: {
          host: "smtp.mail.ru",
          port: 465,
          secure: true,
          auth: {
            user: "studioagnc_redirect@mail.ru",
            pass: "nTcdz2Di59BCnBHS28oL"
          }
        }
      }
    ]
  ],

  axios: {
    baseURL: "http://google.com"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: "server"
};
