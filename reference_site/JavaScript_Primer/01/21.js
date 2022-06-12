// Optional chaining演算子（?.）

// 動作1
console.log("動作1");
function printWidgetTitle(widget) {
  if (widget.window !== undefined && widget.window.title !== undefined) {
    console.log(`ウィジェットのタイトルは${widget.window.title}です`);
  } else {
    console.log("ウィジェットのタイトルは未定義です");
  }
}

printWidgetTitle({
  window: {
    title: "Book Viewer"
  }
});

printWidgetTitle({

});

// 動作2
console.log("動作2");
const obj = {
  a: {
    b: "objのaプロパティのbプロパティ"
  }
};
console.log(obj?.a?.b);
console.log(obj?.notFound?.notFound);