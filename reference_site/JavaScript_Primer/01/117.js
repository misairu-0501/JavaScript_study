// JSON

//JSON文字列をオブジェクトに変換する

const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);
console.log(obj.id);
console.log(obj.name);

const json1 = "[1, 2, 3]";
console.log(JSON.parse(json1));

//例外処理
const UserInout = "not json value";
try {
  const json = JSON.parse(UserInout);
} catch (error) {
  console.log("パースできませんでした");
}

