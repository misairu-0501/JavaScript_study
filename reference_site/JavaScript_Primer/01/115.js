// Set

// セットの作成と初期化

//動作1
console.log("動作1");
const set = new Set();
console.log(set.size);

//動作2
console.log("動作2");
const set1 = new Set(["value1", "value2", "value2"]);
console.log(set1.size);

//値の追加と取り出し

//動作3
console.log("動作3");
const set2 = new Set();
set2.add("a");
console.log(set2.size);
console.log(set2.has("a"));
console.log(set2.has("b"));

//値の削除

//動作4
console.log("動作4");
const set3 = new Set();
set3.add("a");
set3.add("b");
console.log(set3.size);
set3.delete("a");
console.log(set3.size)
set3.clear();
console.log(set3.size)
