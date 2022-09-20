export default {}


// 注意点： 可多不可少
// class Animal {
//   feet: number;
//   age: number;
//   constructor(name: string, numFeet: number) {}
// }

// class Size {
//   feet: number;
//   constructor(numFeet: number) {}
// }

// let a: Animal;
// let s: Size;
// s = a;
// a = s;


// private / protected
class Animal {
  protected feet: number;
  constructor(name: string, numFeet: number) {
    
  }
}

class Size {
  private feet: number;
  constructor(numFeet: number) {
    
  }
}

let a: Animal;
let s: Size;
s = a;
a = s;

