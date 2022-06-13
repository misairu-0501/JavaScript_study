// オブジェクトのspread構文でのマージ

//動作1
console.log("動作1");

const objectA = {a: "a"};
const objectB = {b: "b"};
const merged = {
  ...objectA,
  ...objectB
};
console.log(merged);

//動作2
console.log("動作2");

const objectC = {version: "c"};
const objectD = {version: "d"};
const merged1 = {
  ...objectC,
  ...objectD,
  other: "other"
};
console.log(merged1);