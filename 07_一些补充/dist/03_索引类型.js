"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// class Person {
//   name: string;
//   age: number;
// }
// type MyType = Person["name"];
// let a: MyType = "赵韩樱子";
// console.log(a);
// 需求：获取指定的对象，它的部分属性，将结果放在数组返回
let obj = {
    name: "吴倩",
    age: 18,
    sex: true
};
// obj[name]   obj[age]
function getValues(obj, keys) {
    let arr = [];
    keys.forEach(key => {
        arr.push(obj[key]);
    });
    return arr;
}
let res = getValues(obj, ["name", "age"]);
console.log(res);
