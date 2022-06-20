//例外処理

//動作1
console.log("動作1");

try {
 console.log("try節：この行は実行されます");
 undefinedFunction();
 } catch(error) {
  console.log("catch節：この行は実行されます");
  console.log(error instanceof ReferenceError);
  console.log(error.message);
 } finally {
  console.log("finally節：この行は実行されます");
 }

 //動作2
 console.log("動作2");

 try {
  throw new Error("例外が投げられました");
 } catch (error) {
  console.log(error.message);
 }