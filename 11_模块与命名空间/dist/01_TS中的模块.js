"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserInfo {
    constructor() {
        this.name = "高圆圆";
        this.age = 18;
        this.sex = "女";
    }
    show() {
        console.log("你好");
    }
}
let u = new UserInfo();
console.log(u.name);
u.show();
const moduleTest_1 = require("./moduleTest");
console.log(moduleTest_1.obj);
