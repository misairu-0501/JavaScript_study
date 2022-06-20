// 要素の削除

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

console.log(map.size);
map.delete("key1");
console.log(map.size);
map.clear();
console.log(map.size);