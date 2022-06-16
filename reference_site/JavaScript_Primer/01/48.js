//正規表現オブジェクト

//正規表現によるインデックスの取得

//動作1
console.log("動作1");
const str = "ABC123EFG";
const searchPattern = /\d{3}/; //\d: 0～9の数字、{3}:三つ連続しているか
console.log(str.search(searchPattern));


//動作2
console.log("動作2");
const str1 = "ABC あいう　DE えお";
const alphabetPattern = /[a-zA-Z]+/;
const results = str1.match(alphabetPattern);
console.log(results.length);
console.log(results[0]);
console.log(results.index);
console.log(results.input);

//動作3
console.log("動作3");
const alphabetPattern1 = /[a-zA-Z]+/g;
const resultsWIthG = str1.match(alphabetPattern1);
console.log(resultsWIthG.length);
console.log(resultsWIthG[0]);
console.log(resultsWIthG[1]);

console.log(resultsWIthG.index);
console.log(resultsWIthG.input);

//動作4
console.log("動作4");
const matchesIterator = str.matchAll(alphabetPattern1);
for (const match of matchesIterator) {
  console.log(`match: "${match[0]}", index: ${match.index}, input: ${match.input}`);
}



