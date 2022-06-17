//クロージャーを利用した高階関数(nより大きいか判定)

function greaterThan(n) {
  return function(m) {
    return m > n;
  }
}

const greaterThan5 = greaterThan(5);
console.log(greaterThan5(4));
console.log(greaterThan5(5));
console.log(greaterThan5(6));