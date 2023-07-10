class Sum {
    sum(a, b) {
        return a + b;
    }
}
class Minus {
    minus(a, b) {
        return a - b;
    }
}
class Multiply {
    multiply(a, b) {
        return a * b;
    }
}
class Divide {
    divide(a, b) {
        return a / b;
    }
}

class Calculator {
    sumObj;
    minusObj;
    multiplyObj;
    divideObj;
    constructor() {
        this.sumObj = new Sum();
        this.minusObj = new Minus();
        this.multiplyObj = new Multiply();
        this.divideObj = new Divide();
    }
    sum(a, b) {
        return this.sumObj.sum(a, b);
    }
    minus(a, b) {
        return this.minusObj.minus(a, b);
    }
    multiply(a, b) {
        return this.multiplyObj.multiply(a, b);
    }
    divide(a, b) {
        return this.divideObj.divide(a, b);
    }
}
//calculator就是我们的面门，负责跟客户端的交互。会在内部按需调用子系统或者说子模块
let calculator = new Calculator();
calculator.sum(1, 2);
calculator.minus(1, 2);
calculator.multiply(1, 2);
calculator.divide(1, 2);