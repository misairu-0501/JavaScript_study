// if文による条件分岐　比較演算子
process.stdin.resume();
process.stdin.setEncoding('utf8');
var age = parseInt(Math.random() * 5) + 18;
process.stdout.write (age  + "才は");
// ここにif文を追加
if (age < 20) {
    console.log("飲酒不可");
} else {
    console.log("飲酒可能");
}