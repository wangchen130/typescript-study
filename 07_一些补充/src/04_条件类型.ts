export default {}

// 1.条件类型基本使用
// type MyType<T> = T extends string ? string : any;
// type res = MyType<boolean>


// 2.函数重载
// interface IName {
//   name: string;
// }

// interface IAge {
//   age: number;
// }

// function reLoad(name: string): IName;
// function reLoad(age: number): IAge;
// function reLoad(nameorAge: string | number): IName | IAge;

// function reLoad(nameorAge: string | number): IName | IAge {
//   throw ""
// }


// 3.条件类型优化函数重载
interface IName {
  name: string;
}

interface IAge {
  age: number;
}


type Condition<T> = T extends string ? IName : IAge;

function reLoad<T extends number | string>(nameOrAge: T): Condition<T> {
  throw ""
}


reLoad("王丽坤");
reLoad(100);