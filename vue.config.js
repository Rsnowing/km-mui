const path = require('path')

module.exports = {
    publicPath: '',
    outputDir: path.resolve(__dirname, '../../../pub/anxinpin-enterprise/common'),
    assetsDir: 'static',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
    },
    // 别名
    configureWebpack: {
		resolve: {
			alias: {
				assets: '@/assets',
				components: '@/components',
				views: '@/views',
			},
		},
	},
	// 配置scss全局引入的路径
	css: {
		loaderOptions: {
			sass: {
				// 根据自己样式文件的位置调整
				prependData: `@import "@/styles/index.scss";`,
			},
		},
	},
	// pug模板转译
    chainWebpack: config => {
        // config.module.rule('pug')
        //     .test(/\.pug$/)
        //     .use('pug-html-loader')
        //     .loader('pug-html-loader')
        //     .end()
    }
}
