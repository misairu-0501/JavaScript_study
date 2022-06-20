// console.errorとスタックトレース

function fn() {
  console.log("メッセージ");
  console.error("エラーメッセージ");
}

fn();