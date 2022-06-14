//配列の展開

//動作1
console.log("動作1");
const array = ["A", "B", "C"];
const newArray = ["X",  "Y", "Z", ...array];
const newArrayConcat = ["X", "Y", "Z"].concat(array);
console.log(newArray);
console.log(newArrayConcat);

const newArray1 = ["X", ...array, "Z"];
console.log(newArray1);

//配列のフラット化
console.log("動作2");
const array1 = [[["A"], "B"], "C"];
console.log(array1.flat());
console.log(array1.flat(1));
console.log(array1.flat(2));
console.log(array1.flat(Infinity));
console.log(Infinity);