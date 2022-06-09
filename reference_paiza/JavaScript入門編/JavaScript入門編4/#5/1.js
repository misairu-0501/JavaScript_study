// 配列の中身を1行ずつ表示してみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var enemy = ["スライム", "モンスター", "ゾンビ", "ドラゴン", "魔王"];

// for文で配列の要素を1つずつ出力する
for (var value of enemy){
    console.log(value);
}


