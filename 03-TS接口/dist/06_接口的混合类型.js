"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 类型断言
// 1. <类型>名称
// 2. 名称 as 类型
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
