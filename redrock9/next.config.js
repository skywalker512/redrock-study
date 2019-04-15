const withTypescript = require('@zeit/next-typescript')
const path = require('path')
module.exports = withTypescript({
  // 对象方法的简写
  webpack(config) {
    const alias = {
      '@/pages': path.resolve(`./pages/`),
      '@/styled': path.resolve(`./styled/`),
      '@/components': path.resolve(`./components/`),
    }
    config.resolve.alias = {...config.resolve.alias, ...alias}
    return config
  }
})
