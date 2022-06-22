// Dateのインスタンスメソッド


// YYYY/MM/DD形式の文字列に変換する関数(動作1)
console.log("動作1");

function formatDate(date) {
  const yyyy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}/${mm}/${dd}`;
}

const date = new Date("2006-01-02T15:04:05.999");
console.log(formatDate(date));

// getTimezoneOffsetメソッド(動作2)
console.log("動作2");

const now = new Date();
const timezoneOffsetInHours = now.getTimezoneOffset() / 60;
console.log(now.getHours());
console.log(`Hour in UTC: ${now.getHours() + timezoneOffsetInHours}`);
