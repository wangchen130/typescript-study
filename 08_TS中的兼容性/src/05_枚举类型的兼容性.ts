export default {}

// 数字枚举与数字兼容
// enum Gender {
//   Male,
//   Female
// }

// let value: Gender;
// value = Gender.Male;
// value = 100;


// 数字枚举与数字枚举不兼容
// enum Gender {
//   Male,
//   Female
// }
// enum Animal {
//   Dog,
//   Cat
// }

// let value:Gender;
// value = Gender.Female;
// value = Animal.Dog;


// 字符串枚举与字符串不兼容
enum Gender {
  Male = "张若昀",
  Female = "唐艺昕"
}

let value: Gender;
value = Gender.Male;
value = Gender.Female;

// value = "娃嘻嘻"

