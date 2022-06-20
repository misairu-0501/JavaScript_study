// クラスフィールドの継承

class Parent {
  parentField = "親クラスで定義したフィールド";
  field = "親クラスで定義したフィールド(field)";
  privateField = "親クラスで定義したPrivateフィールド";
}

class Child extends Parent {
  ChildField = "子クラスで定義したフィールド";
  field = "子クラスで定義したフィールド(field)";

  dump() {
    console.log(this.privateField);
  }
}

const instance = new Child();
console.log(instance.parentField);
console.log(instance.ChildField);

console.log(instance.field);

instance.dump();