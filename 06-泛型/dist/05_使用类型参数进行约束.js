"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// interface IKeyInterface {
//   [key: string]: any
// }
// let getProps = (obj: IKeyInterface, key: string): any => {
//   return obj[key];
// }
// // {a:1, b: 2}
// let x = {a:1, b: 2};
// // let res = getProps(x, "b");
// let res = getProps(x, "c"); // undefined
// console.log(res);
// 注意点: K 就代表 T 中必须有的属性
// T: number, age   K: number / age  != sex
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2 };
// let res =  getProperty(x, "c");
// console.log(res);
