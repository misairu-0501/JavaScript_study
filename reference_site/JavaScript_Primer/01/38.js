//`array`の`index`番目の要素を削除した配列を返す関数

function removeAtIndex(array, index) {
  const copiedArray = array.slice();
  copiedArray.splice(index, 1);
  return copiedArray;
}

const array = ["A", "B", "C"];
const newArray = removeAtIndex(array, 1);
console.log(newArray);
console.log(array);