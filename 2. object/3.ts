export { }
/**
 * 封装 可以把类的内部属性隐藏起来，不让外部直接访问
 * 1. 可以提供类易用性
 * 2. 可以保护类的隐私
 */
class Animal {
    //public 指的是公有属性，此属性可以在本类中，子类中和其它类中访问
    public name: string;
    //protected 受保护的属性，此属性可以在本类中和子类中被访问，其它 类不让
    protected age: number;
    //private 受保护的，被保护在类的内部可以访问，子类和其它 类都无法访问
    private weight: number;
    constructor(name: string, age: number, weight: number) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}
class Person extends Animal {
    //我这个人的账户余额 私有的，只有自己能访问
    private balance: number;
    constructor(name: string, age: number, weight: number, balance: number) {
        super(name, age, weight);
        this.balance = balance;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        //Property 'weight' is private and only accessible within class 'Animal'.
        //return this.weight;
    }
}
let p1 = new Person('zhufeng', 10, 100, 1000);
p1.name;
//p1.age;
//p1.weight;
