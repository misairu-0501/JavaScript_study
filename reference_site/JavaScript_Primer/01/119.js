// toJSONメソッドを使ったシリアライズ

const obj = {
  foo: "foo",
  toJSON() {
    return "bar";
  }
};

console.log(JSON.stringify(obj));
console.log(JSON.stringify({x: obj}));