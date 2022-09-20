// export default {}

function paramDecorator(target: any, key: string, index: number) {
  console.log(target);
  console.log(key);
  console.log(index);
  
}

class Test {
  getInfo( name: string, @paramDecorator age: number) {
    console.log(name, age);
    
  }
}

let t = new Test();
t.getInfo("安悦溪", 18);