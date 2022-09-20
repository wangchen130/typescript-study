// 1.接口
// interface ITest {
//   name: string
// }

// interface ITest {
//   age: number
// }

// class Person implements ITest {
//   name: string = "文咏珊"
//   age: number = 18
// }

// let p = new Person()
// console.log(p.name, p.age);


// interface ITest {
//   show(value: number): number
// }

// interface ITest {
//   show(value: string): number
// }


// const func: ITest = {
//   show(value: any): number {
//     if(typeof value === "string") {
//       return value.length
//     }else {
//       return value.toFixed()
//     }
//   }
// }
// console.log(func.show("世界上最遥远的距离就是,你是if而我是else, 似乎一直相伴但又永远相离"));
// console.log(func.show("世界上最痴心的等待,是我当case而你当switch,或许永远都选不上自己"));
// console.log(func.show("世界上最真情的相依,是你在try我在catch。无论你发神马脾气,我都默默承受,静静处理。到那时,再来期待我们的finally"));
// console.log(func.show(3.14));


// 2.命名空间
// namespace A {
//   export let a = 10;
// }
// namespace A {
//   export let a = 100;
// }


// 命名空间与类合并
// class Person {
//   // prototype上面
//   say():void {
//     console.log("say 孙怡");
    
//   }
// }

// namespace Person {
//   export const hi = ():void => {
//     console.log("hi 孙怡");
    
//   }
// }

// console.dir(Person)


// 命名空间与函数合并
// 注意点: 函数里面可以使用命名空间定义的变量
// function getCounter() {
//   getCounter.count++;
//   console.log(getCounter.count);
  
// }

// namespace getCounter {
//   export let count: number = 0
// }

// getCounter()


// 命名空间与枚举合并
namespace Gender {
  export const money:number = 18
}
enum Gender {
  Male,
  Female
}


// { '0': 'Male', '1': 'Female', Male: 0, Female: 1, money: 18 }
console.log(Gender);
