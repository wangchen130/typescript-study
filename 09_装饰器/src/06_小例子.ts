export default {};

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

const userInfo: any = undefined;

function catchErrorDecorator(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log(msg);
      }
    };
  };
}

class Test {
  @catchErrorDecorator("userInfo.name 不存在")
  getName() {
    return userInfo.name;
  }
  @catchErrorDecorator("userInfo.age 不存在")
  getAge() {
    return userInfo.age;
  }
}

const t = new Test();
t.getName();
t.getAge();
