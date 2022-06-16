//真偽値を取得

//動作1
console.log("動作1");
const str = "にわにはにわにわとりがいる";

console.log(/^にわ/.test(str));
console.log(/^いる/.test(str));

console.log(/にわ$/.test(str));
console.log(/いる$/.test(str));

console.log(/にわ/.test(str));
console.log(/いる/.test(str));