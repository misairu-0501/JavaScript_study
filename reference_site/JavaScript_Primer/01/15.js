// 配列のfilterメソッド
function isEven(num) {
  return num % 2 === 0;
}

const array = [1, 5, 10, 15, 20];
const results =  array.filter(isEven);
console.log(results);