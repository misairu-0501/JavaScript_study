//配列から要素を削除

//動作1
console.log("動作1");
const array = ["a", "b", "c"];
array.splice(1, 1);
console.log(array);
console.log(array.length);
console.log((array[1]));

array.splice(0, array.length);
console.log(array);

array.splice(0, 0, "A", "B", "C");
console.log(array);

const indexC = array.indexOf("C");
array.splice(indexC, 1, "#");
console.log(array);

//空の配列

//動作2
console.log("動作2");
const array1 = [1, 2, 3];
array1.length = 0;
console.log(array1);

let array2 = [1, 2, 3];
array2 = [];
console.log(array2);

