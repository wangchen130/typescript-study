export default {}


// static
class StaticTest {
  static salary: string;
  static say():void {
    console.log("我们想要的工资是: " + this.salary);
  }
}

StaticTest.salary = "18k";
StaticTest.say();

// instanceof
class Person {}
let p = new Person();
let isPerson = p instanceof Person;
console.log("p对象是Person类实例化来的嘛？" + isPerson);

class Student extends Person {}
let s = new Student();
let isPerson2 = s instanceof Person;
console.log("p对象是Person类实例化来的嘛？" + isPerson2);