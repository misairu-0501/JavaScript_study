// プロトタイプチェーン

class MyClass {
  method() {
    console.log("プロトタイプのメソッド");
  }
}

const instance = new MyClass();
instance.method();

const MyClassPrototype = Object.getPrototypeOf(instance);
console.log(MyClassPrototype === MyClass.prototype);