"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 构造函数
var myFunction = new Function("a", "b", "return a*b");
var x = myFunction(4, 3);
console.log(x);
// 递归函数
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
// sum([2, 3, 4, 5], 2) + 4
// sum([2, 3, 4, 5], 1) + 3 + 4
// sum([2, 3, 4, 5], 0) + 2 + 3 + 4
// 0 + 2 + 3 + 4 = 9
let res = sum([2, 3, 4, 5], 3);
console.log(res);
