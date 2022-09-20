"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class Person {
    showName() {
        console.log(this.show());
    }
}
class Student extends Person {
    constructor() {
        super(...arguments);
        this.name = "孟子义";
        this.age = 18;
    }
    show() {
        return "陈情令";
    }
}
// let p = new Person();
let s = new Student();
let res = s.show();
console.log(res);
