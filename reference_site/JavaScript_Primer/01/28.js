//Object.prototypeを継承しないオブジェクト
//動作1
console.log("動作1");
const obj = Object.create(null);
console.log(obj.hasOwnProperty);

// 動作2
console.log("動作2");
const obj1 = {};
console.log(obj1["toString"]);

const mapLike = Object.create(null);
console.log(mapLike["toString"]);

//動作3
console.log("動作3");
const mapLike1 = Object.create(null);
console.log(Object.hasOwn(mapLike1, "key"));