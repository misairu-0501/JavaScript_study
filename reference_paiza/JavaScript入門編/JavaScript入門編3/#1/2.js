// 数値を0から15まで表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var num = 0
while (num < 16) {
    console.log(num);
    num += 1;
}