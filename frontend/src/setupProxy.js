const {createProxyMiddleware} = require('http-proxy-middleware');

const proxyEnabled = process.env['proxy_enabled']
const server = process.env['proxy_server']
const username = process.env['proxy_username']
const password = process.env['proxy_password']

module.exports = function (app) {
    if (proxyEnabled === 'true') {
        app.use(
            '/api',
            createProxyMiddleware({
                target: server,
                changeOrigin: true,
                rejectUnauthorized: false,
                onProxyReq: (proxyReq, req, res) => {
                    proxyReq.setHeader('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
                }
            })
        );
    }
};
