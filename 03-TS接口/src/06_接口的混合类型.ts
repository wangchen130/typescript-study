export default {}

// 混合类型的接口

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

// 类型断言
// 1. <类型>名称
// 2. 名称 as 类型


function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = function() {};

  return counter
}


let c= getCounter();
c(10);
c.reset();
c.interval = 5.0;