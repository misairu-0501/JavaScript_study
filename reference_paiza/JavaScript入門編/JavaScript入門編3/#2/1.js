// 1から10までの偶数を表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var num = 2;
while (num <= 10) {
    console.log(num)
    num += 2;
}