// オブジェクトの列挙

// 動作1
console.log("動作1");
const obj = {
  "one": 1,
  "two": 2,
  "three": 3
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const keys = Object.keys(obj);
keys.forEach(key => {
  console.log(key);
});
