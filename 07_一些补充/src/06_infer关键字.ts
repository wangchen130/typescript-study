export default {}

// 假如想获取数组里的元素类型。如果是数组则返回数组中元素的类型
// 否则返回这个类型本身

type ID = number[];
type IName = string[];

type Unpacked<T> = T extends IName ? string : T extends ID ? number : T;
type nameType = Unpacked<IName>


// infer关键字可以简化操作
type ElementOf<T> = T extends Array<infer E> ? E : T;
type res1 = ElementOf<string[]>
type res2 = ElementOf<number[]>
type res3 = ElementOf<boolean>


// infer关键字可以推断出联合类型
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type res4 = Foo<{a: string; b: number}>;