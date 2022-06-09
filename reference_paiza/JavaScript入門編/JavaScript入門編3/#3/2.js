// 数値を20から10までカウントダウン表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var num = 20;
while (num >= 10) {
    console.log(num);
    num -= 1;
}