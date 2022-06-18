//対処法: call、apply、bindメソッド

//call(動作1)
"use strict";
console.log("動作1");
function say(message) {
  return `${message} ${this.fullName}!`;
}

const person = {
  fullName: "Brendan Eich"
};

console.log(say.call(person, "こんにちは"));

// say("こんにちは"); //エラー

//apply(動作2)
console.log("動作2");
console.log(say.apply(person, ["こんばんは"]));

//bind(動作3)
console.log("動作3");

const sayPerson = say.bind(person, "おはよう");
console.group(sayPerson());