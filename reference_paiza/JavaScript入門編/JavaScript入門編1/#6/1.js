// 数の表示とサイコロ
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 6) + 1;
console.log("サイコロの目は" + number + "です");
