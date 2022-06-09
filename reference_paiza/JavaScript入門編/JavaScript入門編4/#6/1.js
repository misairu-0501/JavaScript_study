// forEachで配列の要素を出力してみよう
process.stdin.resume();
process.stdin.setEncoding('utf-8');

var cities = ["Tokyo", "Kanagawa", "Chiba", "Shizuoka", "Saitama"];


// forEachで配列の要素を1行ずつ出力する
cities.forEach(value => {
    console.log(value);
})


