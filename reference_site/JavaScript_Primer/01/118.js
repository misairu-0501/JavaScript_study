//オブジェクトをJSON文字列に変換する

const obj = {id: 1, name: "js-primer", bio: null };
console.log(JSON.stringify(obj));


//第二引数に関数を渡す
const replacer = (key, value) => {
  if (value === null) {
    return undefined;
  }
  return value;
}
console.log(JSON.stringify(obj, replacer));

//第二引数に配列を渡す
const replacer1 = ["id", "name"];
console.log(JSON.stringify(obj, replacer1));

//第三引数（インデント）
console.log(JSON.stringify(obj, null, 2));

console.log(JSON.stringify(obj, null, "\t"));