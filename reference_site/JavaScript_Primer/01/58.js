//正規表現の.とUnicode

//動作1
console.log("動作1");
const [all, fish] = "𩸽のひらき".match(/(.)のひらき/u);
console.log(all);
console.log(fish);

//Code Pointの数を数える

//動作2
console.log("動作2");
console.log("🍎".length); 
console.log("\uD83C\uDF4E");
console.log("\uD83C\uDF4E".length);

//動作3
console.log("動作3");
const codePoints = Array.from("リンゴ🍎");
console.log(codePoints); // => ["リ", "ン", "ゴ", "🍎"]
console.log(codePoints.length); // => 4

//Code Pointごとに反復処理をする

//動作4
console.log("動作4");

function countOfCodePoints(str, codePoint) {
  return Array.from(str).filter(item => {
    return item === codePoint;
  }).length;
}
console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));

//動作5
function countOfCodePoints1(str, codePoint) {
  let count = 0;
  for (const item of str) {
    if(item === codePoint) {
      count++;
    }
  }
  return count;
}
console.log(countOfCodePoints1("🍎🍇🍎🥕🍒", "🍎"));