export default {}

// 不使用函数重载
function add(a: number, b: number) {
  return a + b;
}

add(10, 20);


function add2(a: string, b: string) {
  return a + b;
}
add2("我的女神是: ", "邱淑贞");


function add3(a: string | number, b: string | number) {
  // return a + b;
  if( typeof a == "number" && typeof b =="number" ) {
    return a + b;
  }
  if( typeof a == "string" && typeof b =="string" ) {
    return a + b;
  }
  if( typeof a == "string" && typeof b =="number" ) {
    return a + b;
  }
  if( typeof a == "number" && typeof b =="string" ) {
    return a + b;
  }
}

add3(10, 20);
add3("邱淑贞", "景甜");
add3(10, "孟子义");
add3("杨紫", 20);


// 函数重载
function addFunc(a: number, b: number):number;
function addFunc(a: string, b: string):string;
function addFunc(a: string, b: number):string;
function addFunc(a: number, b: string):string;

function addFunc(a: any, b: any): any {
  return a + b;
}

addFunc(10, 20);
addFunc("邱淑贞", "景甜");
addFunc(10, "孟子义");
let res =  addFunc("杨紫", 20);
console.log(res);


// 定义参数类型与参数数量不同
function star(s1: string): void;
function star(n1:number, s1: string): void;


function star(x: any, y?:any): void {
  console.log(x);
  console.log(y);
  
}

star("王心凌");
star("爱你");
star(1, "爱你");