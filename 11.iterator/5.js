class Tree {
    constructor(left, value, right
    ) {
        this.left = left;
        this.value = value;
        this.right = right;

    }
}
function make(array) {
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['D'], 'B', ['E']], 'A', [['F'], 'C', ['G']]]);

function* leftOrder(tree) {
    if (tree) {
        yield tree.value;
        yield* leftOrder(tree.left);
        yield* leftOrder(tree.right);
    }
}
//左 根 右
function* inOrder(tree) {
    if (tree) {
        yield* inOrder(tree.left);
        yield tree.value;
        yield* inOrder(tree.right);
    }
}
//左 右 根 
function* rightOrder(tree) {
    if (tree) {
        yield* rightOrder(tree.left);
        yield* rightOrder(tree.right);
        yield tree.value;
    }
}
let result = [];
for (let node of rightOrder(tree)) {
    result.push(node);
}
console.log(result);
