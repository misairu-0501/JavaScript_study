//[ES2022] 静的クラスフィールド


//動作1
console.log("動作1");

class Colors {
  static GREEN = "緑";
  static RED = "赤";
  static BLUE = "青";
}

console.log(Colors.GREEN);

//動作2
console.log("動作2");

class MyClass {
  static #privateClassProp = "this is private";
  static outputPrivate() {
    console.log(this.#privateClassProp);
  }
}

MyClass.outputPrivate();