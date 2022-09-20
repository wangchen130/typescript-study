// 对象混入
// let nameObj = {name: "王楚然"};
// let ageObj = {age: 18};
// // 需求：想让nameObj也拥有 age这个属性
// Object.assign(nameObj, ageObj);
// console.log(nameObj);
// console.log(ageObj);
// 类混入
class Name {
    constructor() {
        this.name = "毛晓彤";
    }
    getName() {
        console.log("我是毛晓彤");
    }
}
class Age {
    constructor() {
        this.age = 18;
    }
    getAge() {
        console.log("我今年18岁了");
    }
}
// class Person extends Name, Age {}
class Person {
}
function Mixins(target, from) {
    from.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            target.prototype[name] = item.prototype[name];
        });
    });
}
Mixins(Person, [Name, Age]);
let p = new Person();
p.getAge();
p.getName();
