export default {} 

// 不使用泛型
// let getArray = (value: number, items: number): number[] => {
//   return new Array(items).fill(value);
// }

// // let arr = getArray(8, 5);
// let arr = getArray("abc", 3)
// console.log(arr);


// let getArray = (value: any, items: number): any[] => {
//   return new Array(items).fill(value);
// } 
// // let arr = getArray("刘亦菲", 3)
// let arr = getArray(8, 3)
// // console.log(arr);

// let res = arr.map(item => item.length);
// console.log(res);



// 使用泛型
let getArray = <T>(value: T, items: number): T[] => {
  return new Array(items).fill(value);
} 


let arr = getArray<string>("刘亦菲111", 3);
// let arr = getArray<number>(8, 3);

let res = arr.map(item => item.length);
console.log(res);