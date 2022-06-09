// 西暦年から昭和年を求める
process.stdin.resume();
process.stdin.setEncoding('utf8');
var seireki = parseInt(Math.random() * 63) + 1926;
process.stdout.write ("西暦" + seireki + "年は");

// 昭和年を計算
var showa = seireki - 1925;
console.log("昭和" + showa + "年です");
