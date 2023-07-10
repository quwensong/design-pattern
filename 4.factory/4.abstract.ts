export { }
export { }
abstract class AmericanoCoffee {
}
abstract class LatteCoffee {
}
abstract class CappuccinoCoffee {
}
class StarBucksAmericanoCoffee extends AmericanoCoffee { }
class LuckinAmericanoCoffee extends AmericanoCoffee { }
class ChaoGeAmericanoCoffee extends AmericanoCoffee { }
class StarBucksLatteCoffee extends LatteCoffee { }
class LuckinLatteCoffee extends LatteCoffee { }
class ChaoGeLatteCoffee extends LatteCoffee { }
class StarBucksCappuccinoCoffee extends CappuccinoCoffee { }
class LuckinCappuccinoCoffee extends CappuccinoCoffee { }
class ChaoGeCappuccinoCoffee extends CappuccinoCoffee { }
//抽象工厂，抽象工厂里需要三个方法
abstract class CafeFactory {
    abstract createAmericanoCoffee(): AmericanoCoffee;
    abstract createLatteCoffee(): LatteCoffee;
    abstract createCappuccinoCoffee(): CappuccinoCoffee;
}
class StarBucksCafeFactory extends CafeFactory {
    createAmericanoCoffee() {
        return new StarBucksAmericanoCoffee();
    }
    createLatteCoffee() {
        return new StarBucksLatteCoffee();
    }
    createCappuccinoCoffee() {
        return new StarBucksCappuccinoCoffee();
    }
}
class LuckinCafeFactory extends CafeFactory {
    createAmericanoCoffee() {
        return new LuckinAmericanoCoffee();
    }
    createLatteCoffee() {
        return new LuckinLatteCoffee();
    }
    createCappuccinoCoffee() {
        return new LuckinCappuccinoCoffee();
    }
}
class ChaoGeCafeFactory extends CafeFactory {
    createAmericanoCoffee() {
        return new ChaoGeAmericanoCoffee();
    }
    createLatteCoffee() {
        return new ChaoGeLatteCoffee();
    }
    createCappuccinoCoffee() {
        return new ChaoGeCappuccinoCoffee();
    }
}
let luckinCafeFactory = new LuckinCafeFactory();
console.log(luckinCafeFactory.createAmericanoCoffee());//创建瑞幸的美式咖啡

let chaoGeCafeFactory = new ChaoGeCafeFactory();
console.log(chaoGeCafeFactory.createCappuccinoCoffee());//创建瑞幸的美式咖啡
