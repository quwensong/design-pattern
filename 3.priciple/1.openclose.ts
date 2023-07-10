/**
 * 开放封装原则 对修改关闭，对扩展开放 
 */
class Customer {
    constructor(public rank: string) {

    }
}
class Product {
    constructor(public name: string, public price: number) {

    }
    //不同的顾客有不同的等级，普通会员 VIP会员 普通顾客，不同的等级打折不一样
    cost(customer: Customer) {
        switch (customer.rank) {
            case 'member':
                return this.price * .8;
            case 'vip':
                return this.price * .6;
            case 'superVip':
                return this.price * .4;
            default:
                return this.price;
        }
    }
}
let product = new Product('笔记本电脑', 1000);
let member = new Customer('member');
let vip = new Customer('vip');
let guest = new Customer('guest');
let superVip = new Customer('superVip');
console.log(product.cost(member));
console.log(product.cost(vip));
console.log(product.cost(guest));

//多态是一个功能，它的实现是要靠继承的, 多态是要靠继承来实现，没能  继承就没有多态
