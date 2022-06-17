//静的スコープ

//動作1
console.log("動作1");
const x = 10;

function printX() {
  console.log(x);
}

function run() {
  const x = 20;
  printX();
}

run();