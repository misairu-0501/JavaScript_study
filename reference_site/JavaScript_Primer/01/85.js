class NumberWrapper {
  #value;
  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    this._value = newValue;
  }
}

const numberWrapper = new NumberWrapper(1);
// console.log(numberWrapper.#value); //エラー