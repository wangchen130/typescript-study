"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`我的女神是${this.name},她今年${this.age}岁了,但是在我的心里,她永远18岁`);
    }
}
let p = new Person("邱淑贞", 54);
p.sayHello();
