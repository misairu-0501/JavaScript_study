// 標準入力からテキストを取得する

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_string = "";
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    // ここで入力を処理する
    input_string = line;
    
});
reader.on('close', () => {
    // ここで出力する
    console.log(input_string);
});
