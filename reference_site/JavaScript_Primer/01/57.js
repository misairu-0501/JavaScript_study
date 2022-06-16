//サロゲートペア

//動作1
console.log("動作1");
console.log("\uD867\uDE3D");
console.log("\u{29e3d}");
console.log("\uD867\uDE3D" === "\u{29e3d}");

console.log("\uD83C\uDF4E");
console.log("\u{1F34E}");

//動作2
console.log("動作");
console.log("\uD867\uDE3D");
console.log("𩸽"[0]);
console.log("𩸽"[1]);
console.log("𩸽".length);