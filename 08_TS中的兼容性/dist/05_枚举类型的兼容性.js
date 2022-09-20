"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 数字枚举与数字兼容
// enum Gender {
//   Male,
//   Female
// }
// let value: Gender;
// value = Gender.Male;
// value = 100;
// 数字枚举与数字枚举不兼容
// enum Gender {
//   Male,
//   Female
// }
// enum Animal {
//   Dog,
//   Cat
// }
// let value:Gender;
// value = Gender.Female;
// value = Animal.Dog;
// 字符串枚举与字符串不兼容
var Gender;
(function (Gender) {
    Gender["Male"] = "\u5F20\u82E5\u6600";
    Gender["Female"] = "\u5510\u827A\u6615";
})(Gender || (Gender = {}));
let value;
value = Gender.Male;
value = Gender.Female;
// value = "娃嘻嘻"
