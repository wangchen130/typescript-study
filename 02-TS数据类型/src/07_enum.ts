export default {}

/* 
  enum`类型是对JavaScript标准数据类型的一个补充。 
  像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
*/

// 枚举用于表示固定的几个取值
// 例如: 人的性别只能是男或者女

enum Gender {
  Male,
  Female
}

let val: Gender;
val = Gender.Male;
val = Gender.Female;
// val = 0;
// val = 1;
// val = "邱淑贞";
// val = false;


// 注意点: TS中枚举类型的本质就是数值类型，所以赋值数值不会报错
// val = 100;
// val = 200;

console.log(Gender.Male); // 0
console.log(Gender.Female); // 1

// 注意点: TS中枚举类型的取值，默认从0开始，从上向下依次递增
enum Gender2 {
  Male = 5,
  Female
}

console.log(Gender2.Male); // 5
console.log(Gender2.Female); //  6

enum Gender3 {
  Male,
  Female=10
}
console.log(Gender3.Male); // 0 
console.log(Gender3.Female); //  10

enum Gender4 {
  Male=100,
  Female=1200
}
console.log(Gender4.Male); // 100 
console.log(Gender4.Female); //  1200


