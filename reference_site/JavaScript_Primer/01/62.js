//関数スコープとvarの巻き上げ

//動作1
console.log("動作1");
console.log(x);
var x = "varのx";
console.log(x);

//動作2
console.log("動作2");
function fn() {
  console.log(y);
  {
    var y = "varのy";
  }
  console.log(y);
}
fn();