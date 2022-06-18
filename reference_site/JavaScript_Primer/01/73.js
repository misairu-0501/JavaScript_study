// 対処法: Arrow Functionでコールバック関数を扱う

"use strict";
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    return strings.map((str) => {
      return this.prefix + "-" + str;
    });
  }
};

const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);