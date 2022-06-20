// 非同期処理:コールバック/Promise/Async Function

//同期処理

function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  } 
}

console.log("処理を開始");
blockTime(5000);
console.log("この行が呼ばれるまで処理が5秒間ブロックされる");