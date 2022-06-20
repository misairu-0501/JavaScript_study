// ビルトインエラー

//ReferenceError(動作1)
console.log("動作1");

try {
  console.log(x);
} catch (error) {
  console.log(error instanceof ReferenceError);
  console.log(error.name);
  console.log(error.message);
}

//SyntaxError(動作2)
console.log("動作2");

try {
  eval("foo! bar!");
} catch (error) {
  console.log(error instanceof SyntaxError);
  console.log(error.name);
  console.log(error.message);
}

//TypeError(動作3)
console.log("動作3");

try {
  const fn = {};
  fn();
} catch (error) {
  console.log(error instanceof TypeError);
  console.log(error.name);
  console.log(error.message);
}