export default {}

// 参数个数
// 注意点： 可少不可多
// let func1 = (a: number, b: string) => {}
// let func2 = (x: number) => {}

// func1 = func2;
// func2 = func1;


// 参数类型
// 注意点: 参数类型必须相同
// let func1 = (x: number) => {}
// let func2 = (x: number) => {}
// let func3 = (x: string) => {}

// func1 = func2;
// func2 = func1;
// func1 = func3;
// func3 = func1;


// 返回值类型
// 注意点： 返回值类型必须相同
// let func1 = (): number => 18;
// let func2 = (): number => 28;
// let func3 = (): string => "返回值类型的兼容性";

// func1 = func2;
// func2 = func1;
// func1 = func3;
// func3 = func1;

// 函数双向协变
// 1.参数的双向协变
// 注意点: 可以多的赋值给少的
// let func1 = (x: number) => {}
// let func2 = (x: (number | string)) => {}

// func1 = func2
// func2 = func1

// 2.返回值的双向协变
// 注意点： 不能将返回值是联合类型的赋值给具体的；可以将返回值是具体类型的赋值给联合类型的
// let func1 = (x: boolean):(number | string) => x ? 18: "张含韵";
// let func2 = (x: boolean): boolean => true;

// func1 = func2;
// func2 = func1;



// 函数重载
// 注意点: 不能将重载少的赋值给重载多的， 可以将重载多的赋值给重载少的
// function add(x: number, y: number): number;
// function add(s: string, y: string): string;
// function add(x: any, y: any): any {
//   return x+y;
// }

// function sub(x: number, y: number): number;
// function sub(x: any, y: any) {
//   return x - y;
// }

// let fn = add;
// fn = sub;

// let fn = sub;
// fn = sub;


// 可选参数及剩余参数
// 当一个函数有剩余参数的时候，它被当做无限个可选参数
function func(args: any[], callback: (...args: any[]) => void) {

}
func([1, 2], (x, y,z)=> console.log(x+ y+ z))
func([1, 2], (x?, y?)=> console.log(x+ y))
func([1, 2], (x, y?, z?)=> console.log(x+ y+z))