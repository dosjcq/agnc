export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "agnc",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
    // script: [
    //   { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js" },
    //   {
    //     src:
    //       "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js"
    //   },
    //   { src: "/vendor/SplitText.min.js" }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/base.css", "reseter.css", "~/assets/styles/main.css"],

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
          to: "ctrlaltdelet1999@yandex.ru"
        },
        smtp: {
          host: "smtp.mail.ru",
          port: 465,
          secure: true,
          auth: {
            user: "nagibin.artyom@mail.ru",
            pass: "5hlBwMlUYDK3B4MMAZZ5"
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseUrl:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3000"
        : "https://agnc.herokuapp.com/mail/send"
  },

  target: "server"
};
