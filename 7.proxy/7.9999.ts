export { };
let http = require('http');
let server = http.createServer(function (req, res) {
    res.end('9999')
});
server.listen(9999, () => console.log('9999'));
//反向代理 9999  web真正应用服务器