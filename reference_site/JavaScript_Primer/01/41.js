// メソッドチェーンと高階関数

//動作1
console.log("動作1");
const array = ["a"].concat("b").concat("c");
console.log(array);

//動作2
console.log("動作2");

// ECMAScriptのバージョン名と発行年
const ECMAScriptVersions = [
  { name: "ECMAScript 1", year: 1997 },
  { name: "ECMAScript 2", year: 1998 },
  { name: "ECMAScript 3", year: 1999 },
  { name: "ECMAScript 5", year: 2009 },
  { name: "ECMAScript 5.1", year: 2011 },
  { name: "ECMAScript 2015", year: 2015 },
  { name: "ECMAScript 2016", year: 2016 },
  { name: "ECMAScript 2017", year: 2017 },
];

const versionNames = ECMAScriptVersions
  .filter(ECMAScript => ECMAScript.year <= 2000)
  .map(ECMAScript => ECMAScript.name);

  console.log(versionNames);