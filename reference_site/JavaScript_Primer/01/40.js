//Array-likeオブジェクト

//動作1
console.log("動作1");
function myFunk() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(typeof arguments.forEach);

  console.log(Array.isArray([1, 2, 3]));
  console.log(Array.isArray(arguments));
}

myFunk("a", "b", "c");

//動作2
console.log("動作2");
function myFunk1() {
  const argumentsArray = Array.from(arguments);
  console.log(Array.isArray(argumentsArray));
  argumentsArray.forEach((arg => {
    console.log(arg);
  }));
}

myFunk1("a", "b", "c");