"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
function visitDecorator(target, key, descritor) {
    // console.log(target);
    // console.log(key);
    // console.log(descritor);
    descritor.writable = false;
}
class Test {
    constructor(name) {
        this._name = name;
    }
    get name() {
        // console.log("get");
        return this._name;
    }
    set name(newName) {
        // console.log('set');
        this._name = newName;
    }
}
__decorate([
    visitDecorator
], Test.prototype, "name", null);
const t = new Test("周雨彤");
// t.name = "钟楚曦"
console.log(t.name);
