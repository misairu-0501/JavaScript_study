// if文
if (true) {
  console.log("この文は実行されます");
}

const x = 42;
if (x > 10) {
  console.log("xは10より大な値です");
}

// else文
const num = 1;
if (num > 10) {
  console.log(`numは10より大きいです: ${num}`);
} else {
  console.log(`numは10以下です: ${num}`);
}

// うるう年の判定
const year = new Date().getFullYear();
if (year % 400 === 0) {
  console.log(`${year}年はうるう年です`);
} else if (year % 100 === 0) {
  console.log(`${year}年はうるう年ではありません`);
} else if (year % 4 === 0) {
  console.log(`${year}年はうるう年です`);
} else {
  console.log(`${year}年はうるう年ではありません`);
}

// switch文
const version = "ES6";
switch (version) {
  case "ES5":
    console.log("ECMAScript 5");
    break;
  case "ES6":
    console.log("ECMAScript 2015");
    break;
  case "ES7":
    console.log("ECMAScript 2016");
    break;
  default:
    console.log("しらないバージョンです");
    break;
}

// break文
function getECMAScriptName(version) {
  switch (version) {
    case "ES5":
      return "ECMAScript 5";
    case "ES6":
      return "ECMAScript 2015";
    case "ES7":
      return "ECMAScript 2016";
    default:
      return "しらないバージョンです";
  }
}

console.log(getECMAScriptName("ES6"));