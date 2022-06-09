// じゃんけんプログラムを作ろう

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_string = "";
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    input_string = line;
});

reader.on('close', () => {
    var values = input_string.split(",");

    // 配列をそのまま出力する
    console.log(values);

    // 生成するランダムな数値の範囲を調べる
    range = values.length;

    // ランダムにインデックスを生成する
    index = Math.floor(Math.random() * range);

    // 選ばれた手を出力する
    console.log(values[index]);
});
