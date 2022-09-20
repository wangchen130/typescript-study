"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 在类型别名中指定函数返回值为Void, 我们可以强行给它返回值 这个返回值是有效的
let func1 = function () {
    console.log("哈哈哈");
    return "邱淑贞";
};
// 在函数指定返回值为void
function func2() {
    // return "邱淑贞"
}
