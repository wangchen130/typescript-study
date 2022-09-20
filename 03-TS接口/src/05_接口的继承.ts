export default {}


// - 接口继承就是说接口可以通过其他接口来扩展自己。
// - Typescript 允许接口继承多个接口。
// - 继承使用关键字 extends。


// 单继承
interface IPerson {
  age: number
}

interface IName extends IPerson {
  name: string
}

let lady:IName = {
  name: "邱淑贞",
  age: 18
}


// 多继承
// interface IFatherMoney {
//   m1: number
// }

// interface IMotherMoney {
//   m2: number
// }

// interface ISon extends IFatherMoney, IMotherMoney {
//   s: number
// }

// let money: ISon = {
//   m1: 100,
//   m2: 100,
//   s: 100
// }

interface IFatherMoney {
  m1: number
}

interface IMotherMoney {
  m2: string
}

interface ISon extends IFatherMoney, IMotherMoney {
  s: number
}