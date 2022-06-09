// 複数行の標準入力を取得する

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    // ここで入力を処理する
    lines.push(line);
});
reader.on('close', () => {
    // ここで出力する
    for (var i = 0; i < lines.length; i++) {
        console.log(lines[i]);
    }


});
