// JS中的模块
/*
1.默认导入与导出
// 注意点: 这里导入和导出的名字，可以不一致
export default xxx
import ooo from "路径"
*/

/* 
1.按需导入与导出
注意点: 这里导入和导出的名字必须一致
export xxx;
import {xxx} from "路径"
*/

// node中的模块
/* 
1.exports.xxx = xxx
const xxx = require("path");
const {xx, xx} = require("path");

2.module.exports.xxx = xxx
const xxx = require("path");
const {xx, xx} = require("path");
*/

// 3.TS中的模块
// 默认情况下在JS中是不兼容上面两种导入方式混合使用，而TS中对他们做了综合
import Test = require("./moduleTest")

class UserInfo implements Test.IPerson {
  name = "高圆圆"
  age = 18
  sex = "女"
  show() {
    console.log("你好");
    
  }
}

let u = new UserInfo()
console.log(u.name);
u.show()




import { obj } from "./moduleTest";
console.log(obj);


