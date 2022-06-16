//文字列の置換/削除

//動作1
console.log("動作1");
const str = "文字列";
const newStr = str.replace("文字", "");
console.log(str);
console.log(newStr);

//動作2
console.log("動作2");
const str1 = "にわにはにわにわとりがいる";
console.log(str1.replace("にわ", "niwa"));
console.log(str1.replace(/にわ/, "niwa"));
console.log(str1.replace(/にわ/g, "niwa"));

//動作3
console.log("動作3");
const str2 = "???";
console.log(str2.replace("?", "!"));
console.log(str2.replaceAll("?", "!"));
console.log(str2.replace(/\?/g, "!"));
console.log(str2.replaceAll(/\?/g, "!"));