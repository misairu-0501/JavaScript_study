//関数とスコープ

//ブロックスコープ


//動作1
console.log("動作1");
const array = [1, 2, 3, 4, 5];
for (const element of array)  {//ループごとに別々のブロックスコープが作成されるため、const で宣言できる
  console.log(element);
}


//動作2
console.log("動作2");
{
  const x = "x";
  {
    console.log(x);
  }
}

//動作3
console.log("動作3");
{
  const x = "outer";
  {
    const x = "inner";
    console.log(`inner:${x}`);
  }
  console.log(`outer:${x}`);
}

//動作4
console.log("動作4");
console.log(isNaN);
// console.log(Array);

const Array = 1;
console.log(Array);