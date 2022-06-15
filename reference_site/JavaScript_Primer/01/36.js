//破壊的なメソッドと非破壊的なメソッド

//破壊液なメソッド
//動作1
console.log("動作1");
const myArray = ["A", "B", "C"];
const result = myArray.push("D");
console.log(result);
console.log(myArray);

//非破壊的なメソッド
//動作2
console.log("動作2");
const myArray1 = ["A", "B", "C"];
const newArray = myArray1.concat("D");
console.log(myArray1);
console.log(myArray1 === newArray);