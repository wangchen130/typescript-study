"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// any类型
// any表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用any
// 在TS中任何数据类型的值都可以赋值给any类型
// 场景一
// 变量的值会动态改变时，比如来自用户输入，任意值类型可以让这些变量跳过编译
let salary = 1800;
salary = "my salary is 18k";
salary = false;
// 场景二
// 改写现有代码时，任意值允许在编译时可选择的包含或移除类型检查
let x = 4;
// x.ifItExist();
// x.toFixed();
// 场景三
// 定义存储各种类型数据的数组时
let beautyList = ["邱淑贞", "蒋依依", "李紫婷", 10, 20];
beautyList = ["邱淑贞", "蒋依依", "李紫婷", 10, 20, true, [10, 20, 30], { a: 100, b: 200 }];
// void类型
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
// 在TS中只有null和undefined可以赋值给void类型
function makeMoney() {
    console.log("I want to manke money and marry a wife!");
    // return "我今天赚了18K, 存起来"
}
makeMoney();
let value;
// value = 123;
// value = "杨超越";
// value = false;
value = undefined;
value = null;
