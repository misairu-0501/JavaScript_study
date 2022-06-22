// セットの反復処理

//動作1
console.log("動作1");

const set = new Set(["a", "b"]);
const results = [];
set.forEach((value) => {
  results.push(value);
});
console.log(results);

//動作2
console.log("動作2");

const set1 = new Set(["a", "b"]);
const results1 = [];
for (const value of set1) {
  results1.push(value);
}
console.log(results1);