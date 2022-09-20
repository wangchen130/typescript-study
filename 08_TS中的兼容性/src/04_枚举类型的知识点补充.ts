export default {}

// 1.数字枚举
/* 
  注意点： 1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果
          2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增
          3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化
*/
// enum Gender {
//   Male,
//   Female
// }

// console.log(Gender.Male); // 0
// console.log(Gender.Female); // 1
// console.log(Gender[0]); // Male

// const val = 100;
// const num = () => 200;

// enum Gender {
//   // Male = 1,
//   // Female
//   Male = val,
//   Female = num()
// }

// console.log(Gender.Male); // 100
// console.log(Gender.Female); // 200


// 2.字符串枚举
/* 
 1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值
 2.采用[index]的形式不能获取到内容,需要传入[key]
 3.字符串枚举不能使用常量或者计算结果给枚举值赋值
 4.它可以使用内部的其它枚举值来赋值
*/
enum Direction {
  up = "UP",
  down = "DOWN"
}

// console.log(Direction.up); // UP
// console.log(Direction.down); // DOWN
// console.log(Direction[0]); // undefined
// console.log(Direction["up"]); // UP
// console.log(Direction["DOWN"]); // undefined

// const val = "金晨";
// const res = () => "王鸥";

// enum User {
//   // a = val
//   // b = res()
//   c = "HTML",
//   d = c
// }


// 3.异构枚举
// enum Gender {
//   Male = 1,
//   Female = "女"
// }

// console.log(Gender.Male);  // 1
// console.log(Gender.Female); // 女
// console.log(Gender[0]); // undefined
// console.log(Gender["女"]); // undefined
// console.log(Gender["Male"]); // 1


// 4.把枚举成员可以当做类型来使用
enum Gender {
  Male,
  Female
}

interface ITestInterface {
  age: Gender // age: (Gender.Male | Gender.Female)
}

class Person implements ITestInterface {
  age: Gender.Female = 1;
}
