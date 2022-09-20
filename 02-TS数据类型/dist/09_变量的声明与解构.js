"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 变量声明的方式
// var | let | const
// 数组解构
let goddess = ["邱淑贞", "赵雅芝", "张敏"];
let [first, second, a, b] = goddess;
// console.log(first);
// console.log(second);
// console.log(a);
// console.log(b);
let [third, ...rest] = ["赵今麦", "蒋依依", "欧阳娜娜", "刘浩存"];
console.log(third); // 赵今麦
console.log(rest); // [ '蒋依依', '欧阳娜娜', '刘浩存' ]
console.log(...rest); // 蒋依依 欧阳娜娜 刘浩存
// axios   {code: xxx , aaa: 111, bb:xxx, data: xxx,}
let [, fourth, , fiifth] = [1, 2, 3, 4];
console.log(fourth); // 2
console.log(fiifth); // 4
// 对象解构
let beauty = {
    uname: "杨超越",
    age: 20,
    sex: "女"
};
let { uname, sex } = beauty;
console.log(uname);
console.log(sex);
