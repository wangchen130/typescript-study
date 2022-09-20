"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 1.任何类型都可以赋值给unknown类型
let str;
str = 18;
str = "张馨予";
str = false;
str = [1, 2, 3,];
// 2.不能将unknown类型赋值给其他类型
let val = 18;
let num;
let a = 18;
let b = true;
let c; // any类型
let d;
let e;
