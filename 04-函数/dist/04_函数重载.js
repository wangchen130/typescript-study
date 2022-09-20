"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 不使用函数重载
function add(a, b) {
    return a + b;
}
add(10, 20);
function add2(a, b) {
    return a + b;
}
add2("我的女神是: ", "邱淑贞");
function add3(a, b) {
    // return a + b;
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "number" && typeof b == "string") {
        return a + b;
    }
}
add3(10, 20);
add3("邱淑贞", "景甜");
add3(10, "孟子义");
add3("杨紫", 20);
function addFunc(a, b) {
    return a + b;
}
addFunc(10, 20);
addFunc("邱淑贞", "景甜");
addFunc(10, "孟子义");
let res = addFunc("杨紫", 20);
console.log(res);
function star(x, y) {
    console.log(x);
    console.log(y);
}
star("王心凌");
star("爱你");
star(1, "爱你");
