export default {}


// 注意点： 可多不可少
interface INameTest {
  name: string;
}

let n1 = {name: "祝绪丹"};
let n2 = {name: "江疏影", age: 18};
let n3 = {age: 18};

let val: INameTest;
val = n1;
val = n2;
// val = n3;


// 注意点: 类型必须一一对应，ts内部会进行递归检查
interface ITestInfo {
  name: string
  children: {
    age: number;
  }
}

let p1 = {name: "吴宣仪", children: {age: 18}};
let p2 = {name: "吴宣仪", children: {age: true}};

let t: ITestInfo;
t = p1;

// t = p2;