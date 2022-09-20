"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 注意点: 我们一旦定义好接口，就确定了变量或者形参，我们使用接口进行约束的时候，就必须一模一样
// 少一个或者少多个参数的情况  可选属性
// let goddess1:IFullName = {firstName: "邱", lastName: "淑贞"};
// let goddess2:IFullName = {firstName: "邱", lastName: "淑贞", age: 18};
// 多一个或者多多个
// 方案一: 使用变量  不推荐
let info = { firstName: "邱", lastName: "淑贞", age: 18, singName: "赌王", dance: "兔子舞" };
let goddess3 = info;
// 方案二: 使用类型断言
let goddess4 = ({ firstName: "邱", lastName: "淑贞", age: 18, singName: "赌王", dance: "兔子舞", abc: false });
// 注意点: 对象中的键，最终都会被转化为字符串
let name = {
    name1: "邱淑贞",
    name2: "古力娜扎",
    name3: "周慧敏",
    // name4: 123
    // 123: 123
};
// 方案三: 使用索引签名
let goddess5 = { firstName: "邱", lastName: "淑贞", age: 18, singName: "赌王", dance: "兔子舞", abc: 123, bcd: false };
