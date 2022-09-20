"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
function getLength(arr) {
    return arr.length;
}
let res1 = getLength("孟子义");
let res2 = getLength([1, 2, 3, 4]);
let res3 = getLength({ length: 20 });
console.log("res1: ", res1);
console.log("res2: ", res2);
console.log("res3: ", res3);
