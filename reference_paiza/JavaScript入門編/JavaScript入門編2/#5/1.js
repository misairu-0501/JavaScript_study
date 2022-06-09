process.stdin.resume();
process.stdin.setEncoding('utf8');
var dice = parseInt(Math.random() * 6) + 1;
console.log("サイコロは" + dice);
if (dice >= 4) {
    console.log("スライムの攻撃をかわした");
} else {
    console.log("スライムから10のダメージを受けた");
}