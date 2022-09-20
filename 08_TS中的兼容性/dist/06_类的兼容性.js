"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 注意点： 可多不可少
// class Animal {
//   feet: number;
//   age: number;
//   constructor(name: string, numFeet: number) {}
// }
// class Size {
//   feet: number;
//   constructor(numFeet: number) {}
// }
// let a: Animal;
// let s: Size;
// s = a;
// a = s;
// private / protected
class Animal {
    constructor(name, numFeet) {
    }
}
class Size {
    constructor(numFeet) {
    }
}
let a;
let s;
s = a;
a = s;
