export default {}

/* 
  - 定义: 索引签名用于描述那些“通过索引得到”的类型
  - 格式: 如`[props: string]:any`
  - 应用场景: 解决参数问题
*/
interface IFullName {
  firstName: string
  lastName: string
  age: number
  singName: string
  [props: string]: any
}

// 注意点: 我们一旦定义好接口，就确定了变量或者形参，我们使用接口进行约束的时候，就必须一模一样

// 少一个或者少多个参数的情况  可选属性
// let goddess1:IFullName = {firstName: "邱", lastName: "淑贞"};
// let goddess2:IFullName = {firstName: "邱", lastName: "淑贞", age: 18};


// 多一个或者多多个
// 方案一: 使用变量  不推荐
let info = {firstName: "邱", lastName: "淑贞", age: 18, singName: "赌王", dance: "兔子舞"};
let goddess3:IFullName = info;

// 方案二: 使用类型断言
let goddess4:IFullName = 
  ({firstName: "邱", lastName: "淑贞", age: 18, singName: "赌王", dance: "兔子舞", abc: false}) as IFullName;


interface Ibeauty {
  [props: string]: string
}
// 注意点: 对象中的键，最终都会被转化为字符串
let name: Ibeauty = {
  name1: "邱淑贞",
  name2: "古力娜扎",
  name3: "周慧敏",
  // name4: 123
  // 123: 123
}




// 方案三: 使用索引签名

let goddess5:IFullName = 
{firstName: "邱", lastName: "淑贞", age: 18, singName: "赌王", dance: "兔子舞", abc: 123, bcd: false};