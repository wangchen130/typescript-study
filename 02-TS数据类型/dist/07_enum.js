"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
  enum`类型是对JavaScript标准数据类型的一个补充。
  像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
*/
// 枚举用于表示固定的几个取值
// 例如: 人的性别只能是男或者女
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let val;
val = Gender.Male;
val = Gender.Female;
// val = 0;
// val = 1;
// val = "邱淑贞";
// val = false;
// 注意点: TS中枚举类型的本质就是数值类型，所以赋值数值不会报错
// val = 100;
// val = 200;
console.log(Gender.Male); // 0
console.log(Gender.Female); // 1
// 注意点: TS中枚举类型的取值，默认从0开始，从上向下依次递增
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Male"] = 5] = "Male";
    Gender2[Gender2["Female"] = 6] = "Female";
})(Gender2 || (Gender2 = {}));
console.log(Gender2.Male); // 5
console.log(Gender2.Female); //  6
var Gender3;
(function (Gender3) {
    Gender3[Gender3["Male"] = 0] = "Male";
    Gender3[Gender3["Female"] = 10] = "Female";
})(Gender3 || (Gender3 = {}));
console.log(Gender3.Male); // 0 
console.log(Gender3.Female); //  10
var Gender4;
(function (Gender4) {
    Gender4[Gender4["Male"] = 100] = "Male";
    Gender4[Gender4["Female"] = 1200] = "Female";
})(Gender4 || (Gender4 = {}));
console.log(Gender4.Male); // 100 
console.log(Gender4.Female); //  1200
