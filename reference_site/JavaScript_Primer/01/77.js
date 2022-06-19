// クラスのプロトタイプメソッドの定義

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();

console.log(counterA.count);
console.log(counterB.count);

console.log(counterA.increment === counterB.increment);