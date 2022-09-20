export default {}


class Person {
  name: string;
  age: number

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  say():void {
    console.log(`我是${this.name}, 今年${this.age}岁了`);
    
  }
}


// 需求: 在子类也想要父类的方法。怎么办?

class Student extends Person {
  score : string

  constructor(name: string, age: number, score: string) {
    super(name, age)
    this.score = score;
  }

  say():void {
    super.say();
    console.log(`我是重写之后的say方法, 我是学生${this.name}, 今年${this.age}岁了,我的成绩为${this.score}`);
    
  }
  
}

let s = new Student("蒋依依", 18, "A");
s.say();