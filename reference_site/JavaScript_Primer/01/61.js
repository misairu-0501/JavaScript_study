// 実行時間を計測したい関数をコールバック関数として引数に渡す
const measureTask = (taskFn) => {
  const startTime = Date.now();
  taskFn();
  const endTime = Date.now();
  console.log(`実行時間は${endTime - startTime}ミリ秒`);
};
function doHeavyTask() {
  // 計測したい処理
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}
measureTask(doHeavyTask);