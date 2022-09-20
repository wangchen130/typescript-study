"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say() {
        console.log(`我的名字是${this.name}, 性别为${this.sex}, 今年${this.age}岁了`);
    }
}
let p = new Person("邱淑贞", 18, "女");
p.say();
class Student extends Person {
    constructor(name, age, sex, score) {
        super(name, age, sex);
        this.score = score;
    }
    show() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.score);
        // console.log(this.sex);
    }
}
// 思考题: 如果我们给 constructor 加上 protected 会出现什么情况？
// readonly
class PrintConsole {
    constructor(str2, str3, str4) {
        this.str1 = "HTML, CSS, JS, VUE, REACT, NODE";
        this.str2 = str2;
        this.str3 = str3;
        this.str4 = str4;
    }
}
let pc = new PrintConsole("我的头发去哪了，颈椎康复指南", "35岁失业了该怎么办, 外卖月入一万也挺好", "活着");
