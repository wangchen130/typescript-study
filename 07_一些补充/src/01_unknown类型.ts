export default {}

// 1.任何类型都可以赋值给unknown类型
let str: unknown;
str = 18;
str = "张馨予";
str = false;
str = [1, 2, 3,];

// 2.不能将unknown类型赋值给其他类型
let val: unknown = 18;
let num: number;
// num = val;
// 解决方案
// 1.使用类型断言
// num = val as number;
// console.log(num);
// 2.使用类型缩小
// if(typeof val == "number") {
//   num = val;
// }

// 3.unknown与其他任何类型组成的交叉类型最后都是其他类型
// &  交叉类型
type MyType1 = number & unknown;
type MyType2 = unknown & boolean;
let a: MyType1 = 18;
let b: MyType2 = true;


// 4.unknown除了与any以外，与其他任何类型组成的联合类型都是unknown类型
type MyType3 = unknown | any;
type MyType4 = unknown | number;
type MyType5 = unknown | string | boolean;

let c: MyType3; // any类型
let d: MyType4;
let e: MyType5;


// 5.never类型都是unknown类型的子类型
type MyType6 = never extends unknown ? true : false;
