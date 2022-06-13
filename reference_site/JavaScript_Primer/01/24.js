//オブジェクトのマージ

//動作1
console.log("動作1");

const objectA = {a: "a"};
const objectB = {b: "b"};
const merged = Object.assign({}, objectA, objectB);
console.log(merged);

const merged1 = Object.assign(objectA, objectB);
console.log(merged1);
console.log(objectA);
console.log(merged1 === objectA);

//動作2
console.log("動作2");

const objectC = {version: "c"};
const objectD = {version: "d"};
const merged2 = Object.assign({}, objectC, objectD);
console.log(merged2);