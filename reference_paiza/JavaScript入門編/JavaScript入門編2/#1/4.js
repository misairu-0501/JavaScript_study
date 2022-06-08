// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = (parseInt(Math.random() * 3) + 1) * 100;
console.log("あなたの得点は" + number + "ポイントです");
// ここにif文を追加する
if (number == 300) {
  console.log("おめでとう！");
} else {
  console.log("ざんねん！ ");
}
