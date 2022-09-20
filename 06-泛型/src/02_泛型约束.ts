export default {}

// 演示可能会出现的问题
// function getLength<T>(arr: T): T {
//   console.log(arr.length);

//   return arr;
// }

// getLength<string>("孟子义");


// 解决方式
// function getLength<T>(arr: Array<T>): Array<T> {
//   console.log(arr.length);

//   return arr;
// }

// // let res =  getLength([1, 2, 3]);
// // {length: 20}
// let res = getLength("孟子义");
// console.log(res);


// 泛型接口
interface ILength {
  length: number
}

function getLength<T extends ILength>(arr: T): number {
  return arr.length;
}

let res1 = getLength("孟子义");
let res2 = getLength([1, 2, 3, 4]);
let res3 = getLength({length: 20});

console.log("res1: ", res1);
console.log("res2: ", res2);
console.log("res3: ", res3);
