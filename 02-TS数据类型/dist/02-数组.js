"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 数组类型
// 方式一
let beautyList;
beautyList = ["李嘉欣", "王祖贤", "邱淑贞"];
// beautyList = ["李嘉欣", "王祖贤", "邱淑贞", 123, true];
// 方式二
let moneyList;
moneyList = [10, 20, 30];
// moneyList = [10, 20, true]
// 方式三  联合类型
let dream;
dream = [10, 20, 30, "邱淑贞", "李一桐", "赵丽颖"];
// dream = [10, 20, 30, "邱淑贞", "李一桐", "赵丽颖", true];
// 方式四  任意类型   不推荐
let arbitrarliy;
arbitrarliy = [100, "关之琳", true, [1, 2, 3], { a: 123 }];
/*
  总结: 数组是我们开发过程中最常用的数据类型，我们往往会在发送axios请求的时候，
  获取到数组，因此我们需要额外注意，数组在这个场景下的定义与使用
*/
