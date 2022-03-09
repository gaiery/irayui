module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template:'public/index.html',
            filename: 'index.html'
        }
    },
    css: {
        loaderOptions: {
          sass: { // 加载全局scss文件
            // additionalData: '@import "@/component/css/common.scss";'
          }
        }
    }
}