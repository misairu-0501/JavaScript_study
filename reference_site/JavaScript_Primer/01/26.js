//オブジェクトの複製

//動作1
console.log("動作1");

const shallowClone = (obj) => {
  return Object.assign({}, obj);
};

const obj = {a: "a"};
const cloneObj = shallowClone(obj);
console.log(cloneObj);
console.log(obj === cloneObj);

const obj1 = {
  level: 1,
  nest: {
    level: 2
  }
};
const cloneObj1 = shallowClone(obj1);
console.log(cloneObj1);
console.log(cloneObj1.nest === obj1.nest);