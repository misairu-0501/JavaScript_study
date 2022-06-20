// 要素の追加と取り出し

const map = new Map();

map.set("key", "value1");
console.log(map.size);
console.log(map.get("key"));

map.set("key", "value2");
console.log(map.get("key"));

console.log(map.has("key"));
console.log(map.has("foo"));