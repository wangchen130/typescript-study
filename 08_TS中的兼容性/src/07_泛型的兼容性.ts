export default {}


// 因为TS是一个结构化的类型系统，类型参数只在作为成员类型的一部分被消耗时影响到结果类型
// interface Empty<T> {}

// let x: Empty<number>;
// let y: Empty<string>;
// x = y;
// y = x;


interface NotEmpty<T> {
  data: T
}

let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y;
y= x;