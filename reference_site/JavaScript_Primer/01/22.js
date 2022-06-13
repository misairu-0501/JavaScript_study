//動作1
console.log("動作1");

function printWidgetTitle(widget) {
  const title = widget?.window?.title ?? "未定義";
  console.log(`ウィジェットのタイトルは${title}です`);
}

printWidgetTitle({
  window: {
    title: "Book Viewer"
  }
});

printWidgetTitle({

});

//動作2
console.log("動作2")

const language = {
  ja: {
    hello: "こんにちは！"
  },
  en: {
    hello: "Hello!"
  }
};

const langJapanese = "ja";
const langKorean = "ko";
const messageKey = "hello";

console.log(language?.[langJapanese]?.[messageKey]);
console.log(language?.[langKorean]?.[messageKey]);

//toStringメソッド
console.log("動作3");

const obj = {key: "value"};
console.log(obj.toString());
console.log(String(obj));