const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '',
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/index.scss'),
        path.resolve(__dirname, './src/assets/styles/modules/common.scss')
      ]
    }
  }
})
