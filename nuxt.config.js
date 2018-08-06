module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '企点通',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '企点通' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { 
  //   color: '#3B8070',
  //   height: '5px'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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
    }
  },
  cache: true, // 该配置项让你开启组件缓存策略以提升渲染性能
  css: [
    'normalize.css',  // 样式格式化
    { src: '~assets/css/main.scss', lang: 'scss' } // 指定 scss 而非 sass
  ]
}

