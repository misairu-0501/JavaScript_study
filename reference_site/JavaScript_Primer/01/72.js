//問題: コールバック関数とthis

//thisを一時変数へ代入する

"use strict";
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    const that = this;
    return strings.map(function(str) {
      return that.prefix + "-" + str;
    });
  }
};

const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);