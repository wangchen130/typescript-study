"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(`我是${this.name}, 今年${this.age}岁了`);
    }
}
// 需求: 在子类也想要父类的方法。怎么办?
class Student extends Person {
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
    }
    say() {
        super.say();
        console.log(`我是重写之后的say方法, 我是学生${this.name}, 今年${this.age}岁了,我的成绩为${this.score}`);
    }
}
let s = new Student("蒋依依", 18, "A");
s.say();
