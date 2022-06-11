/**
 * 数値を合計した値を返します。
 * 1つ以上の数値と共に呼び出す必要があります。
 * @param {...number} values
 * @returns {number}
 **/
 function sum(...values) {
  return values.reduce((total, value) => {
      // 値がNumber型ではない場合に、例外を投げる
      if (typeof value !== "number") {
          throw new Error(`${value}はNumber型ではありません`);
      }
      return total + Number(value);
  }, 0);
}
const x = 1, z = 10;
let y; // `y`はundefined
console.log(x, y, z);
// Number型の値ではない`y`を渡しているため例外が発生する
console.log(sum(x, y, z)); // => Error