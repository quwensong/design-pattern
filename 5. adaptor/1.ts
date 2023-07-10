//这是需要被适配的类
class Socket {
    output() {
        return '220V';
    }
}

abstract class Power {
    abstract charge(): string;
}

class PowerAdaptor extends Power {
    constructor(public socket: Socket) {
        super();
    }
    charge(): string {
        return this.socket.output() + '转换为24V';
    }
}
let adaptor = new PowerAdaptor(new Socket());
console.log(adaptor.charge());
