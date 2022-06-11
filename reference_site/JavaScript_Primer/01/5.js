// 暗黙的な型変換
console.log(1 + true);
console.log(1 == "1");
console.log(0 == false);
console.log(10 == ["10"]);
console.log(1 + "2");
console.log(1 - "2");

// ３つ以上の値を+演算子で演算する場合
const x = 1 , y = "2", z = 3;
console.log(x + y + z);
console.log(y + x + z);
console.log(x + z + y);

// 明示的な型変換
// 任意の値 → 真偽値
console.log(Boolean("string"));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let x1;
if (!x1) {
  console.log("falsyな値なら表示", x1);
}
if (x1 === undefined) {
  console.log("xがundeifinedなら表示", x1);
}

// 数値→文字列
console.log(typeof String(1));

console.log(String("str"));
console.log(String(true));
console.log(String(undefined));
console.log(String(Symbol("シンボルの説明文")));
console.log(String([1, 2, 3]));
console.log(String({key: "value"}));
console.log(String(function(){}));

// シンボル → 文字列
// console.log("文字列" + Symbol("シンボルの説明"));
console.log("文字列" + String(Symbol("シンボルの説明")));

// 文字列→数値
const input = "42";
const num = Number(input);
console.log(typeof num);
console.log(num);


console.log(Number.parseInt("1", 10));
console.log(Number.parseInt("42px", 10));
console.log(Number.parseInt("10.5", 10));
console.log(Number.parseInt("10.5ff", 10));

console.log(Number.parseFloat("1"));
console.log(Number.parseFloat("42.5px"));
console.log(Number.parseFloat("10.5"));

console.log(Number("文字列"));
console.log(Number(undefined));

const userInout = "任意の文字列";
const num1 = Number.parseInt(userInout, 10);
console.log(num1);
if (Number.isNaN(num1)){
  console.log("パースした結果NaNになった", num1);
}

// NaNはNot a NumberだけどNumber型
console.log(typeof NaN);
console.log(Number({}));

const x2 = 10;
const y2 = x2 + NaN;
const z2 = y2 + 20;
console.log(x2);
console.log(y2);
console.log(z2);

// NaNしか持っていない特殊な性質として、自分自身と一致しない
function isNaN(x) {
  return x !== x;
}
console.log(isNaN(1));
console.log(isNaN("str"));
console.log(isNaN({}));
console.log(isNaN([]));
console.log(isNaN(NaN));

console.log(Number.isNaN(NaN));