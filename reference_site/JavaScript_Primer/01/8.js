// 関数
function double(num) {
  return num * 2;
}

console.log(double(10));

function fn() {
  return;
}

console.log(fn());

function echo(x) {
  return x;
}

console.log(echo(1));
console.log(echo());

function argumentsToArray(x, y) {
  return [x, y];
}

console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));

// デフォルト引数
function echo(x = "デフォルト値") {
  return x;
}

console.log(echo(1));
console.log(echo());

function addPrefix(text, prefix = "デフォルト値:") {
  return prefix + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));

function addPrefix(text, prefix) {
  const pre = prefix ?? "デフォルト:";
  return pre + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));

// 呼び出し引数が多いとき
function add(x, y) {
  return x + y;
}

console.log(add(1, 3));
console.log(add(1, 3, 5));

// 可変長引数
const max = Math.max(1, 5, 10, 20);
console.log(max);

// Rest parameters
function fn1(...args) {
  console.log(args);
}

fn1("a", "b", "c");

function fn2(arg1, ...restArgs) {
  console.log(arg1);
  console.log(restArgs);
}

fn2("a", "b", "c");

// Spread構文
function fn3(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

const array = [1, 2, 3];
fn3(...array);

function fn4() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

fn4("a", "b", "c");

// 関数の引数と分割代入
function printUserId({id}) {
  console.log(id);
}

const user = {
  id: 42
};

printUserId(user);
const { id } = user;
console.log(id);

function print([first, second]) {
  console.log(first);
  console.log(second);
}
const array1 = [1, 2];
print(array1);

// 関数はオブジェクト
function fn5() {
  console.log("fnが呼び出されました");
}

const myFunc = fn5;
myFunc();

// 関数式
const factorial = function innerFact(n) {
  if (n === 0) {
    return 1;
  }
  return n * innerFact(n - 1);
};

console.log(factorial(4));