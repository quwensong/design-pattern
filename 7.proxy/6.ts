export { }
let http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
let server = http.createServer(function (req, res) {
    proxy.web(req, res, {
        target: 'http://127.0.0.1:9999'
    });
});
server.listen(8888, () => console.log('8888'));
//反向代理 8888  nginx