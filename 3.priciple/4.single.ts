/**
 * 单一职责
 * 一个类的功能要尽可能单一，不要太杂 
 * 如果一个类代码行数超过100，方法超10个，或者里面
 */
//Java
export { }
//拆的过细就有可能减低内聚性
class Product {
    public name: string;
    public price: number;
    public category: Category;
    //public updateProduct(propName, propName) { }
    public updateName() { }
    public updatePrice() { }
    public updateCategory() { }
}

class Category {
    public name: string;
    public icon: string;
}
// 拆的越细越好吗？
