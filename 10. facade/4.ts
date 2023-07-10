/**
 * 或者接收两个数字，或者接收两个字符串
 * 相当于一个函数，两种调用方式 
 * @param a 
 * @param b 
 */
function sum(a: string, b: string): void;
function sum(a: number, b: number): void;
function sum(a: string | number, b: string | number) {

}
sum(100, 200);