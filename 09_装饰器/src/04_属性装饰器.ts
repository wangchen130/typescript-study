export default {}

/* function nameDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
  
}

class Test {
  @nameDecorator
  uname = "任敏"
}

let t = new Test()
t.uname = "周洁琼"
console.log(t.uname); */


function nameDecorator(target: any, key: string): any {
  // console.log(target);
  // console.log(key);
  
  // const descriptor: PropertyDescriptor = {
  //   writable: false
  // }
  // return descriptor;

  // 修改的并不是实例上的uname，而是原型上的uname
  target[key] = "秦岚"
}

class Test {
  @nameDecorator
  // 这个uname是放在实例上面的
  uname = "任敏"
}

let t = new Test()
// t.uname = "周洁琼"
console.log(t.uname);
console.log((t as any).__proto__.uname);
