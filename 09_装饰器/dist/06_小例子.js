"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/* const userInfo: any = undefined;

class Test {
  getName() {
    try{
      return userInfo.name
    }catch(e) {
      console.log(e);
      
    }
  }

  getAge() {
    try{
      return userInfo.age
    }catch(e) {
      console.log(e);
      
    }
  }
}

const t = new Test()
t.getName()
t.getAge() */
/*
const userInfo: any = undefined;

function catchErrorDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value
  descriptor.value = function() {
    try{
      fn()
    }catch(e) {
      console.log("userInfo上面不存在该属性");
      
    }
  }
}

class Test {
  @catchErrorDecorator
  getName() {
    return userInfo.name
  }
  @catchErrorDecorator
  getAge() {
    return userInfo.age
  }
}

const t = new Test()
t.getName()
t.getAge() */
const userInfo = undefined;
function catchErrorDecorator(msg) {
    return function (target, key, descriptor) {
        const fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (e) {
                console.log(msg);
            }
        };
    };
}
class Test {
    getName() {
        return userInfo.name;
    }
    getAge() {
        return userInfo.age;
    }
}
__decorate([
    catchErrorDecorator("userInfo.name 不存在")
], Test.prototype, "getName", null);
__decorate([
    catchErrorDecorator("userInfo.age 不存在")
], Test.prototype, "getAge", null);
const t = new Test();
t.getName();
t.getAge();
