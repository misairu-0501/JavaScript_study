// プロトタイプオブジェクト

// 動作1
console.log("動作1");

const obj = {
  "key": "value"
};

console.log(obj.toString === Object.prototype.toString);

console.log(obj.toString());

//動作2
console.log("動作2");

const obj1 = {};
console.log(Object.hasOwn(obj1, "toString"));
console.log("toString" in obj1);

// 動作3
console.log("動作3");

const obj2 = {
  toString() {
    return "custom Value";
  }
};

console.log(Object.hasOwn(obj2, "toString"));
console.log("toString" in obj2);

//オブジェクトの継承元を明示するObject.createメソッド

//動作4
console.log("動作4");
const obj3 = Object.create(Object.prototype);
console.log(obj3.toString === Object.prototype.toString);

//ArrayもObjectを継承している

//動作5
console.log("動作5");
const array = [];
console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty);

//動作6
console.log("動作6");
const numbers = [1, 2, 3];
console.log(numbers.toString());