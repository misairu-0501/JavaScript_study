// [ES2022] Publicクラスフィールド

class Counter {
  count = 0;
  increment() {
    this.count++;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.count);
counter.increment();
console.log(counter.count);