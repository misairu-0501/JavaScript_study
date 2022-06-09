// 配列の要素を上書きしてみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var weapon = ["木の棒", "鉄の棒", "鉄の剣", "鋼の剣"];

// ここで配列の要素を上書きする
weapon[3] = "石斧";

console.log(weapon);
