// if文による条件分岐　比較演算子
process.stdin.resume();
process.stdin.setEncoding('utf8');
var place = parseInt(Math.random() * 12) + 1;
process.stdout.write (place + "位");
// ここにif文を追加する
if (place <= 6) {
    console.log("入賞");
} else {
    console.log("入賞圏外");
}