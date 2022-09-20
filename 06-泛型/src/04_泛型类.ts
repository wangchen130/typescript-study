export default {}

// string number
class Person<T1, T2> {
  name: T1;
  age: T2;
  sex: T1;

  constructor(name: T1, age: T2, sex: T1) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

const p1 = new Person("刘诗诗", 18, "女");
console.log(p1);



const p2 = new Person<String, number>("虞书欣", 18, "女")
console.log(p2);

const p3:Person<String, number> = new Person("刘诗诗", 18, "女");
console.log(p3);


