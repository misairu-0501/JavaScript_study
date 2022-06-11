// Arrow Function
const mulA = x => x * x;
console.log(mulA(5));

// コールバック関数
const array = [1, 2, 3];
const doubleArray = array.map(function(value) {
  return value * 2;
});

console.log(doubleArray);

//省略
const doubleArray1 = array.map(value => value * 2);
console.log(doubleArray1);