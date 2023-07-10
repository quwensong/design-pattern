class CPU {
    startup() {
        console.log('打开CPU');
    }
    shutdown() {
        console.log('关闭CPU');
    }
}
class Disk {
    startup() {
        console.log('打开Disk');
    }
    shutdown() {
        console.log('关闭Disk');
    }
}
class Memory {
    startup() {
        console.log('打开Memory');
    }
    shutdown() {
        console.log('关闭Memory');
    }
}
class Computer {
    cpu;
    memory;
    disk;
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.disk = new Disk();
    }
    startup() {
        this.cpu.startup();
        this.memory.startup();
        this.disk.startup();
    }
    startupCPU() {
        this.cpu.startup();
    }
    shutdownCPU() {
        this.cpu.shutdown();
    }
    shutdown() {
        this.cpu.shutdown();
        this.memory.shutdown();
        this.disk.shutdown();
    }
}
let computer = new Computer();
computer.startup();