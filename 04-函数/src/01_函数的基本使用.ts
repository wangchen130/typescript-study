export default {}

// 匿名函数
const makeMoney = function(salary:number, reward: number): number {
  return salary + reward;
}

// 命名函数
function writeCode(hour: number, sleep: number) {
  return hour;
}


// 箭头函数
const seeMeiMei = (time: number):void  => {
  console.log(`我每天要看${time}个小时的MeiMei`);
  
}
seeMeiMei(8)


// 接口函数
type myFunc = (x: number, y: number) => number
const myfunc:myFunc = (a: number, b: number) => a+b;