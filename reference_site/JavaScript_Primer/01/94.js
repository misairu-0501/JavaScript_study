// プロトタイプ継承

//静的メソッドの継承

class Parent {
  method() {
    console.log("Parent.prototype.method");
  }

  static  hello() {
    return "Hello";
  }
}

class Child extends Parent {

}

const instance = new Child();
instance.method();

console.log(Child.hello());