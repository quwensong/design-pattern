
export { }
Buffer.prototype.slice = function (start, end) {
    const srcLength = this.length;
    end = end != undefined ? end : srcLength;
}