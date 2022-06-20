// Promiseと例外

function throwPromise() {
  return new Promise((resolve, reject) => {
    throw new Error("例外が発生");
  });
}

throwPromise().catch((error => {
  console.log(error.message);
}));