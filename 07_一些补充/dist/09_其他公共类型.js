"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let res = {
    name: "舒畅"
};
let res2 = {
    name: "舒畅",
    age: 18
};
let res3 = {
    age: 19,
    score: 100,
    sex: false
};
// OmitThisParameter
// 从类型T中剔除this参数类型，并构造一个  新类型
function add(x) {
    console.log(x);
}
function f0(x) { }
function f1(x) { }
const x = add;
const y = add;
const z = "江疏影";
console.log(x);
console.log(y);
console.log(z);
