//クラスフィールドはconstructorメソッドでの初期化と併用が可能

//動作1
console.log("動作1");

class MyClass {
  publicField = 1;
  constructor(arg) {
    this.property = arg;
  }
}

const myClass = new MyClass(2);
console.log(myClass.publicField);
console.log(myClass.property);

//同じプロパティ名への定義がある場合は、constructorメソッド内での定義でプロパティは上書き

//動作2
console.log("動作2");

class OwnClass {
  publicField = 1;
  constructor(arg) {
    this.publicField = arg;
  }
}

const ownClass = new OwnClass(2);
console.log(ownClass.publicField);


