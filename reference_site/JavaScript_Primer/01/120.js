// Date

const now = new Date();

console.log(Date.now());

console.log(now.getTime());

console.log(now.toISOString());

// 任意の時刻をインスタンス化する

const date = new Date(1136214245999);
console.log(date.toISOString());

const inUTC = new Date("2006-01-02T15:04:05.999Z");
console.log(inUTC.toISOString());

const inLocal = new Date("2006-01-02T15:04:05.999");
console.log(inLocal.toISOString());

const date1 = new Date(2006, 0, 2, 15, 4, 5, 999);
console.log(date1.toISOString());

const ms = Date.UTC(2006, 0, 2, 15, 4, 5, 999);
const date2 = new Date(ms);
console.log(date2.toISOString());