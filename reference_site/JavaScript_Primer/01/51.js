// 文字列と正規表現どちらを使うべきか

//動作1
console.log("動作1");
const str = "/正規表現のような文字列/";
const regExpLikePattern = /^\/.*\/$/;
console.log(regExpLikePattern.test(str));

const isRegExpLikeString = (str) => {
  return str.startsWith("/") && str.endsWith("/");
};
console.log(isRegExpLikeString(str));