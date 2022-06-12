// for...in文
const obj = {
  "a": 1,
  "b": 2,
  "c": 3
};

console.log("動作1");
for (const key in obj) {
  const value = obj[key];
  console.log(`key:${key}, value:${value}`);
}

console.log("動作2");
Object.keys(obj).forEach(key => {
  const value = obj[key];
  console.log(`key;${key}, value:${value}`);
});

console.log("動作3");
const numbers = [5, 10];
let total = 0;
for (const num in numbers) {
  total += num;
}
console.log(total);

console.log("動作4");
total = 0;
for (const key in numbers) {
  total += numbers[key];
}
console.log(total);