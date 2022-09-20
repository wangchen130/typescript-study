export default {}


// 普通方法： target对应的就是 prototype
// 静态方法:  target对应的就是 类的构造函数
function getNameDecorator(target: any, key: string, desciptor: PropertyDescriptor) {
  // console.log(target);
  // console.log(key);
  // console.log(desciptor);
  
  // desciptor.writable = false;

  desciptor.value = function() {
    return "descrator"
  }
}



class Test {
  name: string = "郑合惠子"
  constructor(name: string) {
    this.name = name
  }
  @getNameDecorator
  getName() {
    return this.name
  }
  // @getNameDecorator
  static show():void {
    console.log("Hello Show");
    
  }
}


let t = new Test("aaa")
// t.getName = () => {
//   return "Hello 张雪迎"
// }
console.log(t.getName());

