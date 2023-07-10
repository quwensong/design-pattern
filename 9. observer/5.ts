export { }
let fs = require('fs');
let rs = fs.createReadStream('./1.txt', { highWaterMark: 3 });
rs.on('data', function (data) {
    console.log(data.toString());
});
rs.on('end', function (data) {
    console.log('end');
});