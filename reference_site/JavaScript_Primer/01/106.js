function dummyFetch(path, callback) {
  setTimeout(() => {
      // /success からはじまるパスにはリソースがあるという設定
      if (path.startsWith("/success")) {
          callback(null, { body: `Response body of ${path}` });
      } else {
          callback(new Error("NOT FOUND"));
      }
  }, 1000 * Math.random());
}
// /success/data にリソースが存在するので、`response`にはデータが入る
dummyFetch("/success/data", (error, response) => {
  if (error) {
      // この行は実行されません
  } else {
      console.log(response); // => { body: "Response body of /success/data" }
  }
});
// /failure/data にリソースは存在しないので、`error`にはエラーオブジェクトが入る
dummyFetch("/failure/data", (error, response) => {
  if (error) {
      console.log(error.message); // => "NOT FOUND"
  } else {
      // この行は実行されません
  }
});