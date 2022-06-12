// [コラム] letではなくconstで反復処理をする

// 動作1
console.log("動作1");
function sum(numbers) {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0); //初期値が0
}

console.log(sum([1, 2, 3, 4, 5]));

// 動作2
console.log("動作2");
function subtraction(numbers, initialValue) {
  return numbers.reduce((result, num) => {
    return result - num;
  }, initialValue); //初期値が100
}

console.log(subtraction([1, 2, 3, 4, 5], 100));//初期値100から配列の中身を引いた値を算出