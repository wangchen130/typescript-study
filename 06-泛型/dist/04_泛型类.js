"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// string number
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
const p1 = new Person("刘诗诗", 18, "女");
console.log(p1);
const p2 = new Person("虞书欣", 18, "女");
console.log(p2);
const p3 = new Person("刘诗诗", 18, "女");
console.log(p3);
