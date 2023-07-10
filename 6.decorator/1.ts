abstract class Shape {
    abstract draw(): void;
}
class Circle extends Shape {
    draw() {
        console.log('绘制圆形');
    }
}
class Rectangle extends Shape {
    draw() {
        console.log('绘制矩形');
    }
}
class Star extends Shape {
    draw() {
        console.log('绘制五角星');
    }
}
//装饰器模式的
abstract class ColorfulShape extends Shape {
    constructor(public shape: Shape) {
        super();
    }
    abstract draw(): void;
}
class RedColorfulShape extends ColorfulShape {
    draw() {
        this.shape.draw();
        console.log('把边框涂成红色');
    }
}
class GreenColorfulShape extends ColorfulShape {
    draw() {
        this.shape.draw();
        console.log('把边框涂成绿色');
    }
}
class YellowColorfulShape extends ColorfulShape {
    draw() {
        this.shape.draw();
        console.log('把边框涂成黄色');
    }
}
// 画一个红色的圆形
let redColorfulShape = new RedColorfulShape(new Circle());
redColorfulShape.draw();

let greenColorfulShape = new GreenColorfulShape(new Rectangle());
greenColorfulShape.draw();

let yellowColorfulShape = new YellowColorfulShape(new Star());
yellowColorfulShape.draw();
