export default {}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(`我的女神是${this.name},她今年${this.age}岁了,但是在我的心里,她永远18岁`);
    
  }
}

let p = new Person("邱淑贞", 54);
p.sayHello()