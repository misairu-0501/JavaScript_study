// マップとしてのObjectとMap

const map = {};

function has(key) {
  return typeof map[key] !== "undefined";
}

console.log(has("foo"));
console.log(has("constructor"));