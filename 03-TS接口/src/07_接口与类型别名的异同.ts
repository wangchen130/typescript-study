export default {}

/* 
1.相同点:

  - 都可以描述属性或方法
  - 都允许拓展

2.不同点:

  - type可以声明基本数据类型，联合类型，数组等; interface只能声明变量
  - 当出现使用type和interface声明同名的数据时;type会直接报错;interface会进行组合
  - type不会自动合并；interface会

*/

// 相同点
// 1.都可以描述属性或者方法
type womenStar = {
  name: string
  age: number
  perform(): any
}
interface IWStar {
  name: string
  age: number
  perform(): any
}

let star1:womenStar = {
  name: "邱淑贞",
  age: 18,
  perform(){
    return "倚天屠龙记"
  }
}

let star2: IWStar = {
  name: "李一桐",
  age: 18,
  perform() {
    return "射雕英雄传"
  }
}


// 2.都允许扩展
type money = {
  y1: number
}
type money2 = money & {
  y2: number
}

let salary:money2 = {
  y1: 10,
  y2: 20
}

interface Istar1 {
  name: string
}
interface Istar2 extends Istar1 {
  age: number
}


let starInfo: Istar2  = {
  name: "邱淑贞",
  age: 18
}


// 不同点
// 1.type 可以声明基本数据类型 ，联合类型 ，数组等等
//   interface只可以声明对象

type age = number;
type info = string | number | boolean;
type beautyList = [string | number];

// interface Iage = number;
// interface Iage {

// }


// 2.type不会进行合并
//   interface会进行合并
// type mygoddessName = {
//   name: string
// }
// type mygoddessName = {
//   age: number
// }


interface ImygoddessName{
  name: string
}

interface ImygoddessName{
  age: number
}


let goddess: ImygoddessName = {
  name: "邱淑贞",
  age: 18
}