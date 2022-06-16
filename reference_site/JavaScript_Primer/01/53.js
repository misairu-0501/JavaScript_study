//replace コールバック関数

//動作1
console.log("動作1");

function toDataJa(dateString) {
return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
  return `${year}年${month}月${day}日`;
});
}

console.log(toDataJa("本日ハ晴天ナリ"));
console.log(toDataJa("今日は2017-03-01です"));