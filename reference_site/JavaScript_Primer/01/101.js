// ビルトインエラーを投げる

function reverseString(str) {
  if (typeof str != "string") {
    throw new TypeError(`${str} is not a string.`);
  }
  return Array.from(str).reverse().join("");
}

str = 12345;

try {
  reverseString(str);
} catch (error) {
    console.log(error instanceof TypeError);
    console.log(error.name);
    console.log(error.message);
  
} finally  {
  if (typeof str === "string") {
    console.log(reverseString(str));
  }

}