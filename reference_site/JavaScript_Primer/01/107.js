// Promise.prototype.thenとPromise.prototype.catch

function dummyFetch(path) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (path.startsWith("/success")) {
              resolve({ body: `Response body of ${path}` });
          } else {
              reject(new Error("NOT FOUND"));
          }
      }, 1000 * Math.random());
  });
}
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
// /success/data のリソースは存在するので成功しonFulfilledが呼ばれる
dummyFetch("/success/data").then(function onFulfilled(response) {
  console.log(response); // => { body: "Response body of /success/data" }
}, function onRejected(error) {
  // この行は実行されません
});
// /failure/data のリソースは存在しないのでonRejectedが呼ばれる
dummyFetch("/failure/data").then(function onFulfilled(response) {
  // この行は実行されません
}, function onRejected(error) {
  console.log(error); // Error: "NOT FOUND"
});