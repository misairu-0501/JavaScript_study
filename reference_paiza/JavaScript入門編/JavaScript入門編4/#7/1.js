// 文字列をカンマで分割してみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var team_str = "勇者,戦士,忍者,魔法使い";

// splitで分割し配列に格納、標準出力に出力する
var team = team_str.split(",");
console.log(team);
