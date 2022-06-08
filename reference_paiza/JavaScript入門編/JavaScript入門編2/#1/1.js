// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 3) + 1;
console.log("あなたの順位は" + number + "位です");
// ここにif文を追加する
if (number == 1) {
    console.log("おめでとう！")
} 
