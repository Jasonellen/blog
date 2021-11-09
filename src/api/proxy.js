const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''

    // 处理代理目标地址
    if (req.url.includes('/uploads')) {
        target = 'htp://113.31.154.207:1337/'
    }

    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            //   例如 /api/boss/xxx 将被转发到 http://example.ip/boss/xxx
            '^/api': '',
        },
    })(req, res)
}
