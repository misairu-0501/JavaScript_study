// コールバック関数
const array = [1, 2, 3];
array.forEach((value) => {
  console.log(value);
});

// メソッド
const obj = {
  method: function() {
    return "this is method";
  }
};

console.log(obj.method());

const obj1 = {
  method() {
    return "this is method 1";
  }
}

console.log(obj1.method());