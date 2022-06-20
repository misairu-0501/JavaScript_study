//プロトタイプに定義したメソッドとインスタンスに定義したメソッドの違い

class ConflictClass {
  method = () => {
    console.log("インスタンスオブジェクトのメソッド");
  };

  method() {
    console.log("プロトタイプのメソッド");
  }
}

const conflict = new ConflictClass();
conflict.method();

delete conflict.method;
conflict.method();