let gen = function* () {
    yield 1;
    yield* [2, 3];
    yield 4;
}
let it4 = gen();
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());
