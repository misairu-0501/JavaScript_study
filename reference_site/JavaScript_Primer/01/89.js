// プロトタイプオブジェクト

//動作1
console.log("動作1");

function fn() {

}

console.log(typeof fn.prototype === "object");

class MyClass {
  method() {
  }
}

console.log(typeof MyClass.prototype === "object");

//動作2
console.log("動作2");

console.log(typeof MyClass.prototype.method === "function");
console.log(MyClass.prototype.constructor === MyClass);
