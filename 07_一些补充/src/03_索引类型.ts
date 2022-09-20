export default {}

// class Person {
//   name: string;
//   age: number;
// }

// type MyType = Person["name"];
// let a: MyType = "赵韩樱子";
// console.log(a);


// 需求：获取指定的对象，它的部分属性，将结果放在数组返回
let obj = {
  name: "吴倩",
  age: 18,
  sex: true
}

// obj[name]   obj[age]
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  let arr = [] as T[K][];

  keys.forEach(key => {
    arr.push(obj[key])
  })

  return arr;
}


let res = getValues(obj, ["name", "age"]);
console.log(res);
