/**
 * 以前node里全部回调
 */
export { }
let BluebirdPromise = require('bluebird');
let fs = require('fs');
/* fs.readFile('./1.txt', 'utf8', function (err, data) {
    console.log(data);
}); */
/* function readFilePromiseAdaptor(...args) {
    return new Promise(function (resolve) {
        fs.readFile(...args, function (err, data) {
            resolve(data);
        });
    });
} */
function promiseAdaptor(callableFn) {//fs.readFile
    return function (...args) {
        return new Promise(function (resolve, reject) {
            callableFn(...args, function (err, result) {
                err ? reject(err) : resolve(result)
            });
        });
    }
}
let readFile = BluebirdPromise.promisify(fs.readFile);
(async function () {
    let content = await readFile('./1.txt', 'utf8');
    console.log(content);
})();