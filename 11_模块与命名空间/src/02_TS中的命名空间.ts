namespace A {
  export const a = 10;
}

// console.log(A.a);


// 嵌套命名空间
namespace B {
  export const b = 200;
  export namespace C {
    export const c = 300;
  }
}

// console.log(B.b);
// console.log(B.C.b);


// 简化命名空间
import c = B.C.c
console.log(c);




// 引入
import { D } from "./namespaceTest";
console.log(D.d);


