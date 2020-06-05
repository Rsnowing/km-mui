// const path = require('path')

module.exports = {
  publicPath: '',
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
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')

    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
