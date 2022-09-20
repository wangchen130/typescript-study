"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 根据初始值推论
// 相当于 let uname: string = "陈乔恩";
let uname = "陈乔恩";
uname = "徐璐";
// uname = 123;
// uname = true;
// 相当于 let x: (number | null)[] = [0, 1, null];
let x = [0, 1, null];
// x = [20, 30 , 40, 50, null, "abc", true];
// 这里不能进行类型推论
// let uage;
// uage = 123;
// uage = true;
// 根据上下文推论 
window.onmousedown = function (mouseEvent) {
    mouseEvent.button;
    mouseEvent.clientX;
};
