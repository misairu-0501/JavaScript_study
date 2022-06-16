//文字列とは

//動作1
console.log("動作1");
const str = "アオイ";

console.log(str.charCodeAt(0).toString(16));
console.log(str.charCodeAt(1).toString(16));
console.log(str.charCodeAt(2).toString(16));

//動作2
console.log("動作2");
const str1 = String.fromCharCode(
  0x30a2,
  0x30aa,
  0x30a4
);
console.log(str1);
