const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/silt_logo_32x32.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/scrollmagic', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        }
      }],
    ['nuxt-svg'],
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-144041578-1'
    // }]
  ],


  /*
  * add this to activate spanish translation
  {
    name: 'Español',
    code: 'es',
    iso: 'es-ES'
  },
  * 
  */


  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./lang/en-US.json'),
        es: require('./lang/es-ES.json'),
      },
      silentTranslationWarn: false
    }
  },
  ...routerBase,
  generate: {
    fallback: "404.html"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value 
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}