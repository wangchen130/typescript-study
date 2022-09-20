export default {}

interface IPersonInfo {
  name: string;
  age: number;
  sex?: string;
  show(): void;
}

interface IMusic {
  music: string
}


class Person implements IPersonInfo {
  name: string = "吴谨言";
  age: number = 32;
  music: string = "雪落下的声音";
  show(): void {
    console.log(`${this.name}是延禧攻略的主演，她今年${this.age}岁了`);
    console.log(`${this.name}唱了一首歌叫${this.music}`);
    
  }
}

let p = new Person();
p.show();
// p.name = "周冬雨";
// p.sex = "女";


interface ITest extends Person {
  salary: number;
}

class Star extends Person implements ITest {
  salary: number = 50;
  name: string = "关晓彤";
  age: number = 18;
}


let s = new Star();
console.log(s.salary);
console.log(s.name);

