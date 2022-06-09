// おみくじを作る
process.stdin.resume();
process.stdin.setEncoding('utf8');
var omikuji = parseInt(Math.random() * 100) + 1;
if (omikuji >= 30) {
  console.log("omikujiの中身は" + omikuji  + "なので大吉");
} else {
  console.log("omikujiの中身は" + omikuji  + "なので大凶");
}
