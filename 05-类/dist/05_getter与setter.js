"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class GetNameClass {
    constructor() {
        this._fullName = "倪妮";
    }
    // 需求:我们就想要在外部进行修改 _fullName 那怎么办？
    get fullName() {
        console.log("我是get方法");
        return this._fullName;
    }
    set fullName(newName) {
        console.log("我是set方法");
        this._fullName = newName;
    }
}
let startname = new GetNameClass();
startname.fullName = "袁冰妍";
console.log(startname.fullName);
