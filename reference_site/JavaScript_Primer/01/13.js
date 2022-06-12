// while文
let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
  console.log(x);
  x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);

// do while文
const x1 = 1000;
do {
  console.log(x1);
} while (x1 < 10);

// for文
let total = 0;
for (let i = 0; i < 10; i++) {
  total += i + 1;
}
console.log(total);

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sum([1, 2, 3, 4, 5]));

function sum1(numbers) {
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum1([10, 20, 30, 40, 50]));

// 配列のforEachメソッド
const array = [1, 2, 3];
array.forEach(currentValue => {
  console.log(currentValue);
});

function sum2(numbers) {
  let total = 0;
  numbers.forEach(num => {
    total += num;
  });
  return total;
}
console.log(sum2([1, 2, 3, 4, 5]));

// break文
// 偶数を要素に含むかの判定1

// const numbers = [1, 5, 7, 15, 22];
// let isEvenIncluded = false;
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   if (num % 2 === 0) {
//     isEvenIncluded = true;
//     break;
//   }
// }
// console.log(isEvenIncluded);

// 偶数を要素に含むかの判断2(関数)
function isEven(num) {
  return num % 2 === 0;
}

function  isEvenIncluded(numbers) {
  let isEvenIncluded = false;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (isEven(num)) {
      isEvenIncluded = true;
      break;
    }
  }
  return isEvenIncluded;
}
const array1 = [1, 5, 11, 15, 22];
console.log(isEvenIncluded(array1));

// 配列のsomeメソッド
function isEven1(num) {
  return num % 2 === 0;
}
const numbers = [1, 5, 11, 15, 20];
console.log(numbers.some(isEven1));