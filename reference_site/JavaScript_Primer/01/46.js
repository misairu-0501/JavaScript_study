//文字列の長さ

//動作1
console.log("動作1");
console.log("文字列".length);
console.log("".length);

//文字列の比較

//動作2
console.log("文字列" === "文字列");
console.log("JS" === "ES");
console.log("文字列" === "文字");

//動作3
console.log("動作3");
console.log("A".charCodeAt(0));
console.log("B".charCodeAt(0));
console.log("A" > "B");
console.log("ABC" > "ABD");

//文字列の一部を取得

//動作4
console.log("動作4");
const str = "ABCDE";
console.log(str.slice(1));
console.log(str.slice(1, 5));
console.log(str.slice(-1));
console.log(str.slice(1, 4));
console.log(str.slice(4, 1));

//動作5
console.log("動作5");
const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
const queryString = url.slice(indexOfQuery);
console.log(queryString);