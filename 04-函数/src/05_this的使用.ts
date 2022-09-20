export default {}

let userInfo = {
  name: "邱淑贞",
  age: 18,
  song: "恨你太无情",
  marry: true,
  show: function() {
    this.marry = false;
  }
}

class Rectangle1 {
   w: number;
   h: number;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
  }

  getArea() {
    return () => {
      return this.w * this.h;
    }
  }
}

class Rectangle2 {
  w: number;
  h: number;

 constructor(w: number, h: number) {
   this.w = w;
   this.h = h;
 }

 getArea(this: Rectangle2) {
   return () => {
     return this.w * this.h;
   }
 }
}


class Rectangle3 {
  w: number;
  h: number;

 constructor(w: number, h: number) {
   this.w = w;
   this.h = h;
 }

 getArea(this: void) {
   return () => {
     return 111;
   }
 }
}
