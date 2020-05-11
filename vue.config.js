// const path = require('path')

module.exports = {
  publicPath: '',
  // outputDir: path.resolve(__dirname, '../../../pub/anxinpin-enterprise/common'),
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
  },
  // 别名
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views'
      }
    }
  },
  // 配置scss全局引入的路径
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        prependData: '@import "@/styles/index.scss";'
      }
    }
  },
  chainWebpack: config => {
    // config.module.rule('pug')
    //     .test(/\.pug$/)
    //     .use('pug-html-loader')
    //     .loader('pug-html-loader')
    //     .end()

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  }
}
