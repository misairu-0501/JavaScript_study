//文字列による検索

//文字列によるインデックスの取得

//動作1
console.log("動作1");
const str = "にわにはにわにわとりがいる";
console.log(str.indexOf("にわ"));
console.log(str.lastIndexOf("にわ"));
console.log(str.indexOf("には"));
console.log(str.indexOf("未知のワード"));

//動作2
console.log("動作2");
const str1 = "JavaScript";
const searchWord = "Script";
const index = str1.indexOf(searchWord);
if (index !== -1) {
  console.log(`{searchWord}が見つかりました`);
} else {
  console.log(`{searchWord}hは見つかりませんでした`);
}

//真偽値の取得
console.log("動作3");
const str2 = "にわにはにわにわとりがいる";
console.log(str2.startsWith("にわ"));
console.log(str2.startsWith("いる"));

console.log(str2.endsWith("にわ"));
console.log(str2.endsWith("いる"));

console.log(str2.includes("にわ"));
console.log(str2.includes("いる"));