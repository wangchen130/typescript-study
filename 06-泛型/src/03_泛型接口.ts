export default {}

// interface IPerson {
//   name: string;
//   age: number;
// }

// let p: IPerson = {
//   name: "于文文",
//   age: 18
// }

// interface IPerson<T1, T2> {
//   name: T1;
//   age: T2;
// }

// let p: IPerson<string, number> = {
//   name: "于文文",
//   age: 18
// }


// 泛型也可以拥有默认值
// 注意点：我们的默认值是类型，而不是初始化的具体值
interface IPerson<T1=String, T2=number> {
  name: T1;
  age: T2
}

let p: IPerson = {
  name: "于文文",
  age: 50
}
console.log(p);
