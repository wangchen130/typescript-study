export default {}
// 类型断言
//  1.<我们想要它成为的类型>变量名
//  2.变量名 as 我们想要它成为的类型

let str = "世界上最遥远的距离不是生与死, 你是if而我是else, 似乎一直相伴但又永远相离";

// 方式一
// let len = (<string>str).length;
// console.log(len);

// 方式二  as 作为
// let len = (str as string).length;
// console.log(len);



// function TypeAs(x: string | number) {
//   console.log(x.length);
  
// }

// TypeAs("世界上最痴心的等待, 是我当case而你当switch, 或许永远都选不上自己");


function TypeAs(x: string | number) {
  // let len = (x as string).length;  
  let len = (<string>x).length;
  console.log(len);
  
}

TypeAs("世界上最痴心的等待, 是我当case而你当switch, 或许永远都选不上自己");

