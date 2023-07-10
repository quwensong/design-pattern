export { }
/* abstract class Star {
    abstract answerPhone(): void;//接电话
} */
interface Star {
    answerPhone(): void;

}

class Angelababy implements Star {
    //是否有空的意思
    available: boolean = false
    answerPhone(): void {
        console.log('你好,我是Angelababy');
    }
}

class AngelababyAgent implements Star {
    angelababy
    //让经纪人保持一个对angelababy引用
    constructor() {
        this.angelababy = new Angelababy();
    }
    answerPhone(): void {
        console.log('你好,我是Angelababy的经纪人');
        if (this.angelababy.available) {//判断一下angelababy有没有空，如果有的话
            this.angelababy.answerPhone();
        } else {
            console.log('很抱歉,Angelababy没有空!');
        }
    }
}
let angelababyAgent = new AngelababyAgent();
angelababyAgent.answerPhone();