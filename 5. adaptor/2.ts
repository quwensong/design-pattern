

//import axios from 'axios';
const url = require('url');
axios({
    url: 'http://localhost:8080/api/user?id=5',
    method: 'GET'
}).then((res: any) => console.log(res), (err: any) => console.error(err))

function xhr(config: any) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open(config.method, config.url, true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject('请求失败');
                }
            }
        }
        request.send();
    });
}
function http(config: any) {
    let http = require('http');
    let urlObject = url.parse(config.url);
    return new Promise(function (resolve, reject) {
        const options = {
            hostname: urlObject.hostname,
            port: urlObject.port,
            path: urlObject.path,
            method: config.method
        }
        let req = http.request(options, function (response: any) {
            let chunks: any = [];
            response.on('data', function (chunk: any) {
                chunks.push(chunk);
            });
            response.on('end', function () {
                let result = Buffer.concat(chunks).toString();
                resolve(result);
            });
        });
        req.on('error', function (error: any) {
            reject(error);
        });
        req.end();
    });
}
function getDefaultAdaptor() {
    let adaptor;
    if (typeof XMLHttpRequest != 'undefined') {
        adaptor = xhr;
    } else if (typeof process != 'undefined') {
        adaptor = http;
    }
    return adaptor;
}
function axios(config: any): any {
    let adaptor = getDefaultAdaptor();
    //不管是浏览器端还是node端，都是传入一个config对象，返回一个promise
    return adaptor(config);
}