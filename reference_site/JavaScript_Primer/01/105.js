// 非同期処理と例外処理

setTimeout(() => {
  try {
    throw new Error("エラー");
  } catch (error) {
    console.log("エラーをキャッチできる");
  }
}, 10);
console.log("この行は実行されます");