export default {}

abstract class Person {
  abstract name: string;
  abstract show(): string;

  showName() {
    console.log(this.show());
    
  }
}

class Student extends Person {
  name: string = "孟子义";
  age: number = 18;
  show(): string {
    return "陈情令"
  }
}

// let p = new Person();

let s = new Student();
let res = s.show();
console.log(res);
