//インデックスを取得

//動作1
console.log("動作1");
const array = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array.indexOf("JavaScript");
console.log(indexOfJS);
console.log(array[indexOfJS]);
console.log(array.indexOf("JS"))

// 動作2
console.log("動作2");
const obj1 = {key: "value"};
const array1 = ["A", "B", obj1];
console.log(array1.indexOf({key: "value"}));
console.log(obj1 === {key: "value"});
console.log(array1.indexOf(obj1));

//動作3
console.log("動作3");
const colors = [
  {"color": "red"},
  {"color": "green"},
  {"color": "blue"}
];

const indexOfBlue = colors.findIndex((obj) => {
  return obj.color === "blue";
});

console.log(indexOfBlue);
console.log(colors[indexOfBlue]);

const blueColor = colors.find((obj) => {
  return obj.color === "blue";
});
console.log(blueColor);

const whiteColor = colors.find((obj) => {
  return obj.color === "white";
});
console.log(whiteColor);
