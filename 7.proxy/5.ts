/**
 * 阶乘
 * 正整数的阶乘是所有小于及等于该数的正整数的积 0的阶乘为1
 */
let count = 0;
const factorial = function (num) {
    count++;
    if (num <= 1)
        return 1;
    else {
        return num * factorial(num - 1)
    }
}
const proxy = function (fn) {
    const cache = {};
    return function (num) {
        if (num in cache)
            return cache[num];
        else
            return cache[num] = fn(num);
    }
}
let proxyFactorial = proxy(factorial);
console.log(factorial(5));// 5 4 3 2 1  120
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(5));
console.log('count', count);

