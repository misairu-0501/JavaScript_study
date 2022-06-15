//`array`の`index`番目の要素を削除した配列を返す関数
//引数の`array`は破棄的に変更される

function removeAtIndex(array, index) {
  array.splice(index, 1);
  return array;
}

const array = ["A", "B", "C"];
const newArray = removeAtIndex(array, 1);
console.log(newArray);
console.log(array);