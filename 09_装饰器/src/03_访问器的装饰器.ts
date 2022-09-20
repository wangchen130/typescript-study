export default {}


function visitDecorator(target: any, key: string, descritor: PropertyDescriptor) {
  // console.log(target);
  // console.log(key);
  // console.log(descritor);
  descritor.writable = false
}


class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name
  }
  @visitDecorator
  get name() {
    // console.log("get");
    
    return this._name
  }

  set name(newName: string) {
    // console.log('set');
    
    this._name = newName
  }
}


const t = new Test("周雨彤")
// t.name = "钟楚曦"
console.log(t.name);
