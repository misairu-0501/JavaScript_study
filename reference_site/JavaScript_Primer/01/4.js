// プラス演算子
console.log(1 + 1);
console.log(10 + 0.5);

// 文字列の結合
const value = "文字列" + "結合";
console.log(value);

// マイナス演算子
console.log(1 - 1);
console.log(10 - 0.5);

// 乗算演算子
console.log(2 * 8);
console.log(10 * 0.5);

// 除算演算子
console.log(8 / 2);
console.log(10 / 0.5);

// 剰余演算子
console.log(8 % 2);
console.log(9 % 2);
console.log(10 % 0.5);
console.log(10 % 4.5);

//べき乗算子
console.log(2 ** 4);
console.log(Math.pow(2, 4));

// 単項演算子
console.log(+1);
console.log(+"1");
console.log(+"文字列");

//Nan
console.log(NaN === NaN);
console.log(typeof NaN);
console.log(Number.isNaN(NaN));

// 単項演算子
console.log(-1);
console.log(-(-1));
console.log(-"1");
console.log(-"文字列");

// インクリメント演算子
let num = 1;
num++;
console.log(num);

let x = 1;
console.log(x++);
console.log(x);

let y = 1;
console.log(++y);
console.log(y);

// デクリメント演算子
let num_1 = 1;
num_1--;
console.log(num_1);

let x1 = 1;
console.log(x1--);
console.log(x1);

let y1 = 1;
console.log(--y1);
console.log(y1);

// 厳密等価演算子
console.log(1 === 1);
console.log(1 === "1");

const objA = {};
const objB = {};

console.log(objA === objB);
console.log(objA === objA);

// 厳密不等価演算子
console.log(1 !== 1);
console.log(1 !== "1");

// 等価演算子
console.log(1 == 1);
console.log("str" == "str");
console.log("JavaScript" == "ECMAscript");

const objC = {};
const objD = {};
console.log(objC == objD);
console.log(objC == objC);

// 等価演算子の暗黙的な型変換
console.log(1 == "1");
console.log(1 == "01");
console.log(0 == false);
console.log(0 == null);
console.log(null == undefined);

console.log(null === undefined);

//ビット論理積
console.log(15 & 9);
console.log(0b1111 & 0b11001);

// ビット論理和
console.log(15 | 9);
console.log(0b1111 | 0b1001);

// ビット排他的論理和
console.log(15 ^ 9);
console.log(0b1111 ^ 0b1001);

// ビット否定
console.log(~15);

const str = "森森木森森";
console.log(str.indexOf("本"));
console.log(str.indexOf("火"));
if (str.includes("木")){
  console.log("木を見つけました");
}

// 左シフト演算子
console.log(9 << 2);
console.log(0b1111 << 2);

// 右シフト演算子
console.log((-9) >> 2);

// ゼロ埋め右シフト演算子
console.log((-9) >>> 2);

// 代入演算子
let x2 = 1;
x2 = 42;
console.log(x2);

let num1 = 1;
num1 += 10;
console.log(num1);

// 分割代入
const array = [1, 2];
const [a, b] =  array;
console.log(a);
console.log(b);

const obj = {
  "key": "value"
}

const { key } = obj;
console.log(key);

// AND演算子
console.log(true && "右辺の値");
console.log(false && "右辺の値");

true && console.log("このコンソールログは出力されます");
false && console.log("このコンソールログは実行されません");

console.log("文字列" && "右辺の値");
console.log(42 && "右辺の値");
console.log("" && "右辺の値");
console.log(0 && "右辺の値");
console.log(null && "右辺の値");

const value1 = "str";
if (typeof value1 === "string" && value1 === "str"){
  console.log(`${value1} is string value`);
}

// OR演算子
console.log(true || "右辺の値");
console.log(false || "右辺の値");

true || console.log("このコンソールログは実行されません");
false || console.log("このコンソールログは実行されます");

console.log(0 || "左辺はfalsy");
console.log("" || "左辺はfalsy");
console.log(null || "左辺はfalsy");
console.log(42 || "右辺の値");
console.log("文字列" || "右辺の値");

const value2 = 1;
if (value2 === 0 || value2 === 1){
  console.log("valueは0または1です。")
}

// NOT演算子
console.log(!false);
console.log(!true);

console.log(!0);
console.log(!"");
console.log(!null);
console.log(!42);
console.log(!"文字列");

// Nullish coalescing演算子
console.log(null ?? "右辺の値");
console.log(undefined ?? "右辺の値");
console.log(true ?? "右辺の値");
console.log(false ?? "右辺の値");
console.log(0 ?? "右辺の値");
console.log("文字列" ?? "右辺の値");

const inputValue = 0;
const value3 = inputValue || 42;
console.log(value3);
const value4 = inputValue ?? 42;
console.log(value4);



const valueA = true ? "A" : "B";
console.log(valueA);
const valueB = false ? "A" : "B";
console.log(valueB);


function addPrefix(text, prefix) {
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム:"));