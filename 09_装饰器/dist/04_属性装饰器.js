"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/* function nameDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
  
}

class Test {
  @nameDecorator
  uname = "任敏"
}

let t = new Test()
t.uname = "周洁琼"
console.log(t.uname); */
function nameDecorator(target, key) {
    // console.log(target);
    // console.log(key);
    // const descriptor: PropertyDescriptor = {
    //   writable: false
    // }
    // return descriptor;
    // 修改的并不是实例上的uname，而是原型上的uname
    target[key] = "秦岚";
}
class Test {
    constructor() {
        // 这个uname是放在实例上面的
        this.uname = "任敏";
    }
}
__decorate([
    nameDecorator
], Test.prototype, "uname", void 0);
let t = new Test();
// t.uname = "周洁琼"
console.log(t.uname);
console.log(t.__proto__.uname);
