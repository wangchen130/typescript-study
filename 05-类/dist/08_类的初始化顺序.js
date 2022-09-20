"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
  1.基类的字段被初始化
  2.基类构造函数运行
  3.子类的字段被初始化
  4.子类构造函数运行
*/
class OldStar {
    constructor() {
        this.name = "林青霞";
        console.log("我的名字是:" + this.name);
    }
}
class YoungStar extends OldStar {
    constructor() {
        super();
        this.name = "李子璇";
        console.log(this.name);
    }
}
// 思考: 林青霞 or 李子璇?
let y = new YoungStar();
