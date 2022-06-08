process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 10) + 1;// 匹数 1 ～ 10
console.log("体重100キロのスライムが" + number + "匹あらわれた。");
// 合計体重 = 匹数 × 100
var total = number * 100;
console.log("スライムの合計体重は" + total + "キロです。")