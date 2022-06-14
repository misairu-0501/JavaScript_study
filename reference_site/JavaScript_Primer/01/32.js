//指定範囲の要素を取得

// 動作1
console.log("動作1");
const array = ["A", "B", "C", "D", "E"];
console.log(array.slice(1, 4));
console.log(array.slice(1));
console.log(array.slice(-1));
console.log(array.slice(1, 1));
console.log(array.slice(4, 1));
console.log(array.slice(-2));
console.log(array.slice(-2, -1));
console.log(array.slice(-2, -2));

//真偽値を取得

//動作2
console.log("動作2");
const array1 = ["Java", "JavaScript", "Ruby"];
if (array1.includes("JavaScript")) {
  console.log("配列にJavaScriptが含まれている");
}

//動作3
console.log("動作3");
const colors = [
  {"color": "red"},
  {"color": "green"},
  {"color": "blue"}
];

const isIncludeBlueColor = colors.some((obj) => {
  return obj.color === "blue";
});

console.log(isIncludeBlueColor);