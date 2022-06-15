//配列を反復処理するメソッド

//動作1
console.log("動作1");
const array = [1, 2, 3];
array.forEach((currentValue, index, array) => {
  console.log(currentValue, index, array);
});

//動作2
console.log("動作2");
const array1 = [1, 2, 3];
const newArray = array1.map((currentValue, index, array) => {
  return currentValue * 10;
});
console.log(newArray);

console.log(array1 === newArray);

//動作3
console.log("動作3");
const array2 = [1, 2, 3];
const newArray1 = array2.filter((currentValue, index, array) => {
  return currentValue % 2 === 1;
});
console.log(newArray1);
console.log(array2 === newArray1);

//動作4
console.log("動作4");
const array3 = [1, 2, 3];
const totalValue = array.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);
console.log(totalValue);