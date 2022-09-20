"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let userInfo = {
    name: "邱淑贞",
    age: 18,
    song: "恨你太无情",
    marry: true,
    show: function () {
        this.marry = false;
    }
};
class Rectangle1 {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return () => {
            return this.w * this.h;
        };
    }
}
class Rectangle2 {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return () => {
            return this.w * this.h;
        };
    }
}
class Rectangle3 {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return () => {
            return 111;
        };
    }
}
