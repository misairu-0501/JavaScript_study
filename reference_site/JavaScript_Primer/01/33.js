//追加と削除

//動作1
console.log("動作1");
const array = ["A", "B", "C"];
array.push("D");
console.log(array);
const poppedItem = array.pop();
console.log(poppedItem);
console.log(array);

array.unshift("S");
console.log(array);
const shiftedItem = array.shift();
console.log(shiftedItem);
console.log(array);

//配列同士を結合

//動作2
console.log("動作2");
const array1 = ["A", "B", "C"];
let newArray = array.concat(["D", "E"]);
console.log(newArray);
newArray = newArray.concat("新しい要素");
console.log(newArray);
