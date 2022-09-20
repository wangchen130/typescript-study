export default {}


// type MyType<T> = T extends any ? T : never;
// type res = MyType<string | number | boolean>;

// 从 T 中提出可以赋值给U的类型。 Exclude
// type res = Exclude<string | number | boolean, boolean | number>;

// 从中剔除null和undefined  NonNullable
// type res = NonNullable<string | number | boolean | null | undefined>;

// 获取函数返回值类型  ReturnType
// type res = ReturnType<() => string>;


// 获取一个类的构造函数组成的元组类型  ConstructorParamsters
// class Person {
//   constructor(name: string, age: number) {}
// }

// type res = ConstructorParameters<typeof Person>;


// 获得函数的参数类型组成的元组类型  Parameters
// function show(name: string, age: number, sex: boolean) {

// }

// type res = Parameters<typeof show>;