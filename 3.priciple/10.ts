class Salesman {
    constructor(public name: string) {

    }
    sale() {
        console.log(this.name + ' 销售中....');
    }
}
class SaleManager {
    private salesmen: Array<Salesman> = [new Salesman('张三'), new Salesman('李四')];
    sale() {
        this.salesmen.forEach(salesman => salesman.sale());
    }
}
class CEO {
    private saleManager: SaleManager = new SaleManager();
    sale() {
        this.saleManager.sale();
    }
}
let ceo = new CEO();
ceo.sale();