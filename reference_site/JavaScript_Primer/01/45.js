// 文字列の分解と結合

//動作1
console.log("動作1");
const strings = "赤・青・緑".split("・");
console.log(strings);

//動作2
console.log("動作2");
const str = "赤・青・緑".split("・").join("、");
console.log(str);

//動作3
console.log("動作3");
const str1 = "a b     c   d";
const strings1 = str1.split(/\s+/);
console.log(strings1);