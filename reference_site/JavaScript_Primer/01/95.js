// superプロパティ

class Parent {
  method() {
    console.log("Parent.prototype.method");
  }

  static method1() {
    console.log("Parent.method");
  }
}

class Child extends Parent {
  method() {
    console.log("Child.prototype.method");
    super.method();
  }

  static method1() {
    console.log("Child.method");
    super.method1();
  }
}

const child = new Child();
child.method();
Child.method1();