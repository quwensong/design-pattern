export { }
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

function unZip(src) {
    console.log('解压zip', src);
    /*  let gunzip = zlib.createGunzip();
     let inputStream = fs.createReadStream(src);
     let outputStream = fs.createWriteStream(src.slice(0, -3));
     //gunzip transform Stream 
     inputStream.pipe(gunzip).pipe(outputStream); */
}
function unRar(src) {
    console.log('解压Rar', src);
}
function un7z(src) {
    console.log('解压7z', src);
}
//unZip(path.resolve('./1.txt.gz'));
function zip(src) {
    let gzip = zlib.createGzip();
    let inputStream = fs.createReadStream(src);
    let outputStream = fs.createWriteStream(src + '.gz');
    inputStream.pipe(gzip).pipe(outputStream);
}
//zip(path.resolve('./1.txt'));
function open(src) {
    let ext = path.extname(src);
    switch (ext) {
        case '.gz':
            unZip(src);
            break;
        case '.rar':
            unRar(src);
            break;
        case '.7z':
            un7z(src);
            break;
        default:
            break;
    }
}
open(path.resolve('./1.txt.gz'));