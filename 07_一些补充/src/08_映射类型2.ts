export default {}

// Record映射类型
// 他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
type Name = "person" | "animal";
type Person = {
  name: string;
  age: number
}

// 注意点： 想要谁作为名称谁就写在前面， 想要谁作为最底层的属性，谁就写在后面
type NewType = Record<Name, Person>

let res: NewType = {
  person: {
    name: "唐艺昕",
    age: 18
  },
  animal: {
    name: "云梦",
    age: 0.4
  }
}
console.log(res);



// Pick映射类型
// 将原有类型中的部分内容映射到新类型中
interface IInfo {
  name: string;
  age: number;
}


type PartProp = Pick<IInfo, "age">
let res2: PartProp = {
  // name: "韩雪"
  age: 18
}

console.log(res2);
