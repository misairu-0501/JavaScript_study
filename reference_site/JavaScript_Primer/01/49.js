//マッチした文字列の一部を取得

//動作1
console.log("動作1");
const pattern = /ECMAScript (\d+)/;
const [all, capture1, capture2] = "ECMAScript 6 ECMAScript 7".match(pattern);
console.log(all);
console.log(capture1);

//動作2
console.log("動作2");
const pattern1 = /ES(\d+)/g;
const matchesIterator = "ES2015、ES2016、ES2017".matchAll(pattern1);
for (const match of matchesIterator) {
  console.log(`match: "${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`);
}
