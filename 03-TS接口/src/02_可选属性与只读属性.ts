export default {}

// 可选属性 ?
interface IFullName {
  firstName: string
  lastName: string
  age?: number
}

let goddessName: IFullName = {
  firstName: "邱",
  lastName: "淑贞",
}


// 只读属性 readonly
interface IInfo {
  readonly uname: string
  readonly uage: number
}

let beauty:IInfo = {
  uname: "李庚希",
  uage: 18
}
// beauty.uname = "赵丽颖"
// beauty.uage = 28


// readonly VS const

// const aaa = 123;
// aaa = 456;

interface IAAA {
  readonly aaa: number
}

interface IAAA {
  bbb: number
}

let aaabbb: IAAA = {
  aaa: 123,
  bbb: 456
}

/* 
  总结：
  如果我们要作为变量使用就使用 const
  如果我们要作为属性使用就使用 readonly
*/

