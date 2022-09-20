export default {}

/* 
接口是什么？
  接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，
  然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法 

  接口也是一种数据类型

格式：
  interface interface_name { 
  }
*/
interface IFullName {
  firstName: string
  lastName: string
}

let goddessName:IFullName = {
  firstName: "邱",
  lastName: "淑贞"
}

console.log(goddessName.firstName);
console.log(goddessName.lastName);



function say({firstName, lastName}: IFullName):void {
  console.log(`我的女神是: ${firstName}_${lastName}`);
  
}

say(goddessName)

