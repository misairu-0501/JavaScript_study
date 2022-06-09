// 数値を10から1までカウントダウン表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var num = 10;
while (num > 0) {
    console.log(num);
    num -= 1;
}