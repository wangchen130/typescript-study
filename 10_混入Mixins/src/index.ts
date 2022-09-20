
// 对象混入
// let nameObj = {name: "王楚然"};
// let ageObj = {age: 18};

// // 需求：想让nameObj也拥有 age这个属性
// Object.assign(nameObj, ageObj);
// console.log(nameObj);
// console.log(ageObj);





// 类混入

class Name {
  name: string = "毛晓彤";
  getName():void {
    console.log("我是毛晓彤");
  }
}

class Age {
  age: number = 18;
  getAge():void {
    console.log("我今年18岁了");
    
  }
}

// class Person extends Name, Age {}

class Person implements Name, Age {
  name: string;
  age: number;
  getAge: () => void;
  getName: () => void;
}

function Mixins(target: any, from: any[]) {
  from.forEach(item => {
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      target.prototype[name] = item.prototype[name]
    })
  })
}

Mixins(Person, [Name, Age])

let p = new Person()
p.getAge()
p.getName()