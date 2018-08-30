module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '简历魔板',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '简历魔板'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#41B883',
    height: '3px'
  },
  /*
   ** Build configuration
   */
  build: {
    // babel: { //配置按需引入规则
    //   "plugins": [
    //     [
    //       "import",
    //       {
    //         "libraryName": "muse-ui",
    //         "libraryDirectory": "lib",
    //         "camel2DashComponentName": false
    //       }
    //     ]
    //   ]
    // },
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    styleResources: {
      scss: './assets/variables.scss',
      less: './assets/*.less',
      // sass: ...,
      // scss: ...
      options: {}
    },
    vendor: ['~/plugins/vue-back']
  },
  cache: true, // 该配置项让你开启组件缓存策略以提升渲染性能
  css: [
    'normalize.css', // 样式格式化
    'vue-back/dist/vue-back.css',
    {
      src: '~assets/styles/main.scss',
      lang: 'scss'
    }, // 指定 scss 而非 sass
    'muse-ui/dist/muse-ui.css'
    // {
    //   src: 'muse-ui/lib/styles/base.less',
    //   lang: 'less'
    // },
    // {
    //   src: 'muse-ui/lib/styles/theme.less',
    //   lang: 'less'
    // }
  ],
  plugins: [{
    src: '~/plugins/vue-back',
    ssr: true
  }, {
    src: '~/plugins/muse-ui',
    ssr: true
  }],
}
