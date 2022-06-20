// 継承

class Parent {
  constructor(...args) {
    console.log("Parentコンストラクタの処理", ...args);
  }
}

class Child extends Parent {
  constructor(...args) {
    super(...args);
    console.log("Childコンストラクタの処理", ...args);
  }
}

const chile = new Child("引数1", "引数2");