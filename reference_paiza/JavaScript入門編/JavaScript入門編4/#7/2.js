// 文字列をカンマで分割してみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_string = "";
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    input_string = line;
});

reader.on('close', () => {
    var array = [];

    // ここでカンマで区切って配列に格納する
    array = input_string.split(",");

    console.log(array);
});
