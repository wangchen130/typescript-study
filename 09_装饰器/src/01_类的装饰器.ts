export default {};

/* function testDecorator(constructor: any) {
  constructor.prototype.uname = "张予曦";
  constructor.prototype.show = ():void => {
    console.log(`我是${constructor.prototype.uname}`);
    
  }
}


@testDecorator
class Person {

}

let p = new Person();
(p as any).show(); */

// 工厂函数
/* function testDecorator(flag: boolean) {
  if(flag) {
    return function (constructor: any) {
      constructor.prototype.uname = "张予曦";
      constructor.prototype.show = (): void => {
        console.log(`我是${constructor.prototype.uname}`);
      };
    };
  }else {
    return function(constructor: any) {}
  }
}

@testDecorator(true)
class Person {}

let p = new Person();
// (p as any).show(); */

// T 就相当于一个类
// 函数可以接收很多的参数，参数的类型都是any类型，最后把这些都放在了数组中
/* function testDecorator<T extends new(...args: any[]) => {}>(constructor: T) {
  // 直接对 constructor 进行扩展
  return class extends constructor {
    name = "章若楠";
    age = 18;
    show() {
      console.log(this.name, "xxxxxxxxxxxxxxxxxxxx");
      
    }
  }
}

@testDecorator
class Person {
  name: string;
  constructor(name: string) {
    this.name = name
  }
}


let p = new Person("陈意涵");
console.log(p);
(p as any).show() */

// 工厂函数
function testDecorator() {
  return function <T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
      name = "章若楠";
      age = 18;
      show() {
        console.log(this.name, "xxxxxxxxxxxxxxxxxxxx");
      }
    };
  };
}

const Person = testDecorator()(class {
  name: string;
  constructor(name: string) {
    this.name = name
  }
})
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

let p = new Person("陈意涵");
console.log(p.name);
p.show()
