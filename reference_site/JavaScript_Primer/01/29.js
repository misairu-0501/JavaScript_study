// 配列

//動作1
console.log("動作1");
const array = ["one", "two", "three"];
console.log(array[0]);

const matrix = [
  ["a", "b"],
  ["c", "d"]
];
console.log(matrix[0][0]);

console.log(array.length);
console.log(array[array.length - 1]);

console.log(array[100]);

//動作2
console.log("動作2");
const sparseArray = [1, , 3];
console.log(sparseArray.length);
console.log(sparseArray[1]);

//Array.prototype.at

//動作3
const array1 = ["a", "b", "c"];
console.log(array1.at(0));
console.log(array1.at(1));
console.log(array1.at(-1));
console.log(array1.at(-2));