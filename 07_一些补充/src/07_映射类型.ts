export default {}

// 旧的接口
interface IPerson {
  name: string;
  age: number;
}


// 只读
type ReadonlyTest<T> = {
  // 遍历指定类型所有的key,并添加到当前类型上
  // obj = {a: 1}  obj[a]
  readonly [P in keyof T]: T[P]
}
// type res = ReadonlyTest<IPerson>

// 可选
type PartialTest<T> = {
  [P in keyof T]?: T[P]
}

// type res = PartialTest<IPerson>


// 通过 + - 指定添加或者删除
interface IPerson2 {
  readonly name?: string;
  readonly age?: number;
}

type Test<T> = {
  -readonly [P in keyof T]-?: T[P]
}

type res = Test<IPerson2>


// Readonly / Partial
interface IPerson3 {
  name: string;
  age: number;
}
type res1 = Readonly<IPerson3>
type res2 = Partial<IPerson3>