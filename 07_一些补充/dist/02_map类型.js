"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 创建
let nameSiteMapping = new Map();
// 设置
nameSiteMapping.set("邱淑贞", 1);
nameSiteMapping.set("宋茜", 2);
nameSiteMapping.set("景甜", 3);
// 获取键队友的值
// console.log(nameSiteMapping.get("景甜"));
// // 判断 map 中是否包含键队友的值
// console.log(nameSiteMapping.has("宋茜")); //  true
// console.log(nameSiteMapping.has("刘亦菲")); // false
// // f返回 map 对象键/值的数量
// console.log(nameSiteMapping.size);
// // 删除
// console.log(nameSiteMapping.delete("景甜"));
// console.log(nameSiteMapping);
// 可迭代
for (let key of nameSiteMapping.keys()) {
    console.log(key);
}
for (let value of nameSiteMapping.values()) {
    console.log(value);
}
for (let entry of nameSiteMapping.entries()) {
    console.log(entry); // [ '邱淑贞', 1 ]
}
for (let [key, value] of nameSiteMapping) {
    console.log(key, value); // 邱淑贞 1
}
