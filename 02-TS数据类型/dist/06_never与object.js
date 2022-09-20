"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// Never类型
// never类型表示的是那些永不存在的值的类型
// 例如: never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
//      变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 注意点:never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
//  即使 any也不可以赋值给never
// never类型是那些总是会抛出异常
// function error(message: string): never {
//   throw new Error(message)
// }
// error("鞠婧祎");
// 推断的返回值为never
// function fail() {
//   return error("李一桐");
// }
// 返回never的函数必须存在无法到达的终点
// function infiniteLoop(): never {
//   while(true) {
//   }
// }
// Object类型
// 表示一个对象
// 定义了一个只能保存对象的变量
let goddess;
// goddess = 1;
// goddess = "白鹿";
// goddess = false;
goddess = {
    name: "白鹿",
    age: 27
};
console.log(goddess);
