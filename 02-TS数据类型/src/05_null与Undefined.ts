export default {}

// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 
// 和 void相似，它们的本身的类型用处不是很大


 let x: undefined = undefined;
 let y: null  =  null;
  

//  x = 123;
// y = "邱淑贞";

// 非严格模式下 ，是否可以赋值给其他类型?
let money: string = "100k";

money = x;
money = y;