//thisが問題となるパターン

//問題: thisを含むメソッドを変数に代入した場合

"use strict";
const person = {
  fullName: "Brendan Eich",
  sayName: function() {
    return this.fullName;
  }
};

console.log(person.sayName());

const say =  person.sayName;
// say(); //エラー
