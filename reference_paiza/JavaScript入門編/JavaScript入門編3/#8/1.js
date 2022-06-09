// 西暦年と昭和年の対応表を作ろう

process.stdin.resume();
process.stdin.setEncoding('utf8');
for (var seireki = 1926; seireki <= 1988; seireki++){
    let shouwa = seireki - 1925;
    console.log("西暦" + seireki + "年は昭和" + shouwa + "年です");
}