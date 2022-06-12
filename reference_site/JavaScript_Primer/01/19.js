// オブジェクトを作成する1

console.log("動作1");
const name = "名前";
const obj = {
  name: name
};
console.log(obj);

console.log("動作2");
const obj1 = {
  name
};
console.log(obj1);

// オブジェクトを作成する2(new演算子)
console.log("動作3");
const obj2 = new Object();
console.log(obj2);

console.log("動作4");
const obj3 = new Object({a: "A", b: "B"});
console.log(obj3);

// プロパティへのアクセス

console.log("動作5");
const obj4 = {
  key: "value"
};
console.log(obj4.key);
console.log(obj4["key"]);

console.log("動作6");
const languages = {
  ja: "日本語",
  en: "英語"
};
const myLang = "ja";
console.log(languages[myLang]);

const { ja, en } = languages;
console.log(ja);
console.log(en);

// プロパティの追加
console.log("動作7");
const obj5 = {};
obj5.key = "value";
console.log(obj5);
console.log(obj5.key);

console.log("動作8");
const key = "key-string";
const obj6 = {
  [key]: "value"
};
console.log(obj6);

// プロパティの削除
console.log("動作9");
const obj7 = {
  key1: "value1",
  key2: "value2"
};
delete obj7.key1;
console.log(obj7);

//オブジェクトの凍結
console.log("動作10");
"use strict";
const object = Object.freeze({ key: "value" });
object.key = "aaaaaaa";
console.log(object);