// エラーオブジェクト

function assertPositiveNumber(num) {
  if (num < 0) {
    throw new Error(`${num} is not positive.`);
  }
}

try {
  assertPositiveNumber(-1);
} catch (error) {
  console.log(error instanceof Error);
  console.log(error.message);
}