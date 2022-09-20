"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 普通方法： target对应的就是 prototype
// 静态方法:  target对应的就是 类的构造函数
function getNameDecorator(target, key, desciptor) {
    // console.log(target);
    // console.log(key);
    // console.log(desciptor);
    // desciptor.writable = false;
    desciptor.value = function () {
        return "descrator";
    };
}
class Test {
    constructor(name) {
        this.name = "郑合惠子";
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // @getNameDecorator
    static show() {
        console.log("Hello Show");
    }
}
__decorate([
    getNameDecorator
], Test.prototype, "getName", null);
let t = new Test("aaa");
// t.getName = () => {
//   return "Hello 张雪迎"
// }
console.log(t.getName());
