
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 router: {
    base:"/dist",
    // middleware: ['browserVersion']
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', type: 'text/css', href: './element-ui/2.13.2/theme-chalk/index.css' }
    ],
    script: [
      {src: ''}
    ]
  },
  // loading: false,
  // loading: { color: '#409EFF' },
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // '@/plugins/core',
    '@/plugins/element-ui',
    '~/plugins/filters',
    { src: '@/plugins/loading', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/dist/shares',
      {
        target: 'http://127.0.0.1:8900/shares', //目标接口域名
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/dist/shares': ''
        }
      }
    ],
    [
      '/dist/tbk',
      {
        target: 'http://127.0.0.1:8900/tbk', //目标接口域名
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/dist/tbk': ''
        }
      }
    ]
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/, 'installComponents'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
