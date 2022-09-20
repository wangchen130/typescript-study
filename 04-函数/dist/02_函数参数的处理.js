"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 可选参数
const func1 = function (a, b) {
    return a;
};
const func2 = function (a, b) {
    return a;
};
func2(10);
func2(10, 20);
func2(10, undefined);
// 函数的默认值
const func3 = function (a = 10, b = 20, c = 30) {
    return a + b + c;
};
func3();
func3(10);
func3(10, 20);
func3(10, 20, 30);
// 函数的剩余参数
const func4 = function (...args) {
    console.log(args);
};
func4(10, 20, 30, "邱淑贞");
const func5 = function (a, b, ...args) {
    console.log(a); // 10
    console.log(b); // 20
    console.log(args); // [ 30, '邱淑贞', '邢菲' ]
};
func5(10, 20, 30, "邱淑贞", "邢菲");
