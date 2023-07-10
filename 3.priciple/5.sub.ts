/**
 * 尽可以使用父类或者抽象类
 * 任何在能使用父类的地方都要可以使用子类
 * 多态有关系
 */
export { }
class AbstractDrink {
    getPrice(): any {
        return 1;
    }
    sum(a: number, b: number) {
        return a + b;
    }
}
class CocaCola extends AbstractDrink {
    getPrice(): any {
        return '我是一瓶可口可乐';
    }
    sum(a: number, b: number) {
        return 0;
    }
}
class Sprite extends AbstractDrink {
    getPrice(): any {
        return 4;
    }
}
class Fanta extends AbstractDrink {
    getPrice(): any {
        return 5;
    }
}
class Customer {
    drink(abstractDrink: AbstractDrink) {
        console.log("花费" + abstractDrink.getPrice());
    }
}
//里氏代换 可以替换，任何可以传父类的地方，都可以把子类传进去
//里氏代换是一个原则，要求子类不能违反父类的功能和规定
let c1 = new Customer();
c1.drink(new AbstractDrink());
c1.drink(new CocaCola());
c1.drink(new Sprite());
c1.drink(new Fanta());
