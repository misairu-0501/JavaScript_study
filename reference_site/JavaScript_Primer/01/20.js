// プロパティの存在を確認する

// 動作1
console.log("動作1");
const obj = {};
console.log(obj.notFound);

// 動作2
console.log("動作2");
const widget = {
  window: {
    title: "ウィジェットのタイトル"
  }
};
console.log(widget);
console.log(widget.windw); //スペルミス
// console.log(widget.windw.title); //スペルミス

//in演算子
// 動作3
console.log("動作3");
const obj1 = { key: undefined};
if ("key" in obj1) {
  console.log("`key`プロパティは存在する");
}

//動作4
console.log("動作4");
const target = 10;
const array = [10, 20, 30];
if (array.some(num => num === target)) {
  console.log(`${target}は存在する`);
} else {
  console.log(`${target}は存在しない`);
}

//Object.hasOwn
console.log("動作5");
const obj2 = { key: undefined };
if (Object.hasOwn(obj2, "key")) {
  console.log("`obj`は`key`プロパティを持っている");
}

if (obj2.hasOwnProperty("key")) {
  console.log("`obj`は`key`プロパティを持っている");
}