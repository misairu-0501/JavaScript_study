// 10進数
console.log(1);
console.log(10);
console.log(255);

// 2進数
console.log(0b1111);
console.log(0b10000000000);

// 8進数
console.log(0o0644);
console.log(0o777);

// 16進数
console.log(0xFF);
console.log(0xff);
console.log(0x30A2);

// 少数
console.log(.123);

// 指数
console.log(2e8);

// 数値リテラルで安全に表される最大の数
console.log(Number.MAX_SAFE_INTEGER);

// BigInt
console.log(1n);
console.log(9007199254740992n);

// Numeric Separatrors
console.log(1_000_000_000_000);

// 文字列
console.log("文字列");
console.log('文字列');
console.log(`文字列`);

console.log('8 o\'clock');
console.log("8 o'clock");

console.log("複数の\n行の文字列を\n入れたい");
console.log(
`複数行の
文字列を
入れたい`
);

const str = "文字列";
console.log(`これは${str}です`);

console.log(`This is \`code\``);

// nullリテラル
const foo = null;
console.log(foo);

// オブジェクトリテラル
const obj = {
  "key": "value"
};

console.log(obj.key);
console.log(obj["key"]);

const object = {
  "123": "value"
};

console.log(object["123"]);
// console.log(object.123);  //NG

// 配列リテラル
const array = ["index:0", "index:1", "index:2"];
console.log(array[0]);
console.log(array[1]);

// 正規表現リテラル
const numberRegExp = /\d+/;
console.log(numberRegExp.test("123"));
console.log(numberRegExp.test("a"));

// ラッパーオブジェクト
const str_1 = new String("文字列");
console.log(typeof str_1);
console.log(str_1.length);

// ラッパーオブジェクトへの暗黙的な型変換
const str_2 = "文字列"
console.log(typeof str_2);
console.log(str_2.length);