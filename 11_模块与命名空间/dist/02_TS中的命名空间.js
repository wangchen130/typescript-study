"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    A.a = 10;
})(A || (A = {}));
var B;
(function (B) {
    B.b = 200;
    let C;
    (function (C) {
        C.c = 300;
    })(C = B.C || (B.C = {}));
})(B || (B = {}));
var c = B.C.c;
console.log(c);
const namespaceTest_1 = require("./namespaceTest");
console.log(namespaceTest_1.D.d);
