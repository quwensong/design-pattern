export { }
let http = require('http');
/* http.createServer(function (req, res) {
    res.end('hello');
}); */
let server = http.createServer();
server.on('request', function (req, res) {
    res.end('hello');
});
server.listen(3000);