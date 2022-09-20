export default {}


/* 
  为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
  它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
*/
interface ImakeMoney {
  (salary: number, reward: number): number
}

const sumMoney: ImakeMoney = function(x: number, y: number):number {
  return x + y;
}

let res = sumMoney(10, 20);
console.log(res);




// 接口与数组
// 我们定义了StringArray接口，它具有索引签名。 
// 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值
interface IStringArray {
  [index: number]: string
}

let myArray: IStringArray;
myArray = ["邱淑贞", "赵今麦"];

let myStr: string = myArray[1];
console.log(myStr);




