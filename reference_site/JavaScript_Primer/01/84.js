// [ES2022] Privateクラスフィールド

class PrivateExampleClass {
  #privateField = 42;
  dump() {
    console.log(this.#privateField);
  }
}

const privateExample = new PrivateExampleClass();
privateExample.dump();
