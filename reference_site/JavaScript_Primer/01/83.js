class Counter {
  count = 0;

  up = () => {
    this.increment();
  };
  increment() {
    this.count++;
  }
}

const counter = new Counter();
const up = counter.up;
up();
console.log(counter.count);

// 通常のメソッド定義では、`this`が`undefined`となってしまうため例外が発生する
const increment = counter.increment;
// increment(); エラー

counter.increment();
console.log(counter.count);