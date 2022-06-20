// マップの反復処理

//forEach("動作1")
console.log("動作1");

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const results = [];
map.forEach((value, key) =>{
  results.push(`${key}:${value}`);
});
console.log(results);

//keys("動作2");
console.log("動作2");

const keys = [];
for (const key of map.keys()) {
  keys.push(key);
}
console.log(keys);
console.log(Array.isArray(keys));

const keysArray = Array.from(map.keys());
console.log(keysArray);
console.log(Array.isArray(keysArray));

//entries("動作3")
console.log("動作3");

const entries = [];
for (const [key, value] of map.entries()) {
  entries.push(`${key}:${value}`);
}
console.log(entries);

//for...of("動作4")
const results1 = [];
for (const [key, value] of map) {
  results1.push(`${key}:${value}`);
}
console.log(results1);