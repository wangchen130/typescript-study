export default {}

// 类型别名就是给一个类型起个新名字, 但是它们都代表同一个类型

// 第一种
type beautys = "邱淑贞" | "唐嫣" | "迪丽热巴" | "赵露思";

let one:beautys;

// one = "赵露思";
// one = 100;
// one = true;
// one = "周杰伦--》最伟大的作品";


// 第二种
type myfun = (a: string, b: number) => number

let func: myfun = (a: string, b: number) =>  b


// 第三种
type myGoddess = {
  name: string,
  age: number,
  sex: string
}

let shuzhen:myGoddess = {
  name: "邱淑贞",
  age: 18,
  sex: "女"
}