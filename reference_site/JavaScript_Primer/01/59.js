// ラッパーオブジェクト

//動作1 
console.log("動作1");
console.log("string".toUpperCase());

const str = new String("input value");
console.log(str);
console.log(str.toUpperCase());

//動作2
console.log("動作2");
const str1 = "文字列";
console.log(typeof str1);
const stringWrapper = new String("文字列");
console.log(typeof stringWrapper);
console.log(stringWrapper);

//動作3
console.log("動作3");
const stringWrapper1 = new String("文字列");
console.log(stringWrapper1);
console.log(stringWrapper1.valueOf());