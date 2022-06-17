//メソッド呼び出しにおけるthis

//動作1
console.log("動作1");

const obj = {
  method1: function() {
    return this;
  },
  method2() {
    return this;
  }
};

console.log(obj.method1());
console.log(obj.method2());

//動作2
console.log("動作2");

const person = {
  fullName: "Brendan Eich",
  sayName: function() {
    return this.fullName;
  } 
};
console.log(person.sayName());

//動作3
console.log("動作3");

const obj1 = {
  obj2: {
    obj3: {
      method() {
        return this;
      }
    }
  }
};

console.log(obj1.obj2.obj3.method() === obj1.obj2.obj3);