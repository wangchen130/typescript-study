export default {}

class Person {
  public name: string;
  protected age: number;
  private sex: string;

  constructor(name: string, age: number, sex: string){
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  say():void {
    console.log(`我的名字是${this.name}, 性别为${this.sex}, 今年${this.age}岁了`);
    
  }
}

let p = new Person("邱淑贞", 18, "女");
p.say();

class Student extends Person {
  score: string
  constructor(name: string, age: number, sex: string, score: string){
    super(name, age, sex);
    this.score = score;
  }
  show(): void {
    console.log(this.name);
    console.log(this.age);
    console.log(this.score);
    // console.log(this.sex);
    
  }
}

// 思考题: 如果我们给 constructor 加上 protected 会出现什么情况？


// readonly
class PrintConsole {
  readonly str1: string = "HTML, CSS, JS, VUE, REACT, NODE";
  readonly str2: string;
  readonly str3: string;
  readonly str4: string;

  constructor(str2: string, str3: string, str4: string){
    this.str2 = str2;
    this.str3 = str3;
    this.str4 = str4;
  }
}

let pc = new PrintConsole("我的头发去哪了，颈椎康复指南", 
                          "35岁失业了该怎么办, 外卖月入一万也挺好",
                          "活着")