export default {}


class GetNameClass {
  private _fullName: string = "倪妮";

  // 需求:我们就想要在外部进行修改 _fullName 那怎么办？
  get fullName():string {
    console.log("我是get方法");
    
    return this._fullName;
  }

  set fullName(newName: string){
    console.log("我是set方法");
    
    this._fullName = newName;
  }
}

let startname = new GetNameClass();
startname.fullName = "袁冰妍";

console.log(startname.fullName);

