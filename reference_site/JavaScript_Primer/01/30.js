//オブジェクトが配列かどうか判定する

//動作1
console.log("動作1");

const obj = {};
const array = [];
console.log(Array.isArray(obj));
console.log(Array.isArray(array));

console.log(typeof array);

//配列と分割代入

//動作2
console.log("動作2");

const array1 = ["one", "two", "three"];
const [first, second, third] = array1;
console.log(first);
console.log(second);
console.log(third);

//undefinedの要素と未定義の要素の違い

//動作3
console.log("動作3");
const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
console.log(denseArray[1]);
console.log(denseArray[1]);

console.log(Object.hasOwn(denseArray, 1));
console.log(Object.hasOwn(sparseArray, 1));