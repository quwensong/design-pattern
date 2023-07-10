export { }
/**
 * 开放封装原则 对修改关闭，对扩展开放 
 */
class Customer {
    constructor(public rank: string, public discount: number = 1) {

    }
}
class Product {
    constructor(public name: string, public price: number) {

    }
    //不同的顾客有不同的等级，普通会员 VIP会员 普通顾客，不同的等级打折不一样
    cost(customer: Customer) {
        return this.price * customer.discount;
    }
}
let product = new Product('笔记本电脑', 1000);
let member = new Customer('member', .8);
let vip = new Customer('vip', .6);
let guest = new Customer('guest');
let superVip = new Customer('superVip', .4);
console.log(product.cost(member));
console.log(product.cost(vip));
console.log(product.cost(guest));
console.log(product.cost(superVip));


