//Code Point とCode Unitの違い

//動作1
console.log("動作1");

//文字列をCode Unit(16進数)の配列にして返す
function convertCodeUnits(str) {
  const codeUnits = [];
  for (let i = 0; i < str.length; i++) {
    codeUnits.push(str.charCodeAt(i).toString(16));
  }
  return codeUnits;
}

//文字列をCode Point(16進数)の配列にして返す
function convertCodePoints(str) {
  return Array.from(str).map(char => {
    return char.charCodeAt(0).toString(16);
  });
}

// const str = "アオイ";
const str = "リンゴ🍎";
const codeUnits = convertCodeUnits(str);
console.log(codeUnits);
const codePoints = convertCodePoints(str);
console.log(codePoints);

