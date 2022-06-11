// 空文字かどうかを判定する
function isEmptyString(str) {
  // return !Boolean(str);
  return typeof str === "string" && str.length === 0;
}

console.log(isEmptyString(""));
console.log(isEmptyString(0));
console.log(isEmptyString());