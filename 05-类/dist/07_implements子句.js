"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class Person {
    constructor() {
        this.name = "吴谨言";
        this.age = 32;
        this.music = "雪落下的声音";
    }
    show() {
        console.log(`${this.name}是延禧攻略的主演，她今年${this.age}岁了`);
        console.log(`${this.name}唱了一首歌叫${this.music}`);
    }
}
let p = new Person();
p.show();
class Star extends Person {
    constructor() {
        super(...arguments);
        this.salary = 50;
        this.name = "关晓彤";
        this.age = 18;
    }
}
let s = new Star();
console.log(s.salary);
console.log(s.name);
