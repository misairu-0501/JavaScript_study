// Array.prototype.lengthをアクセッサプロパティで再現する

//動作1
console.log("動作1");
const array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array.join(","));

array.length = 5;
console.log(array.join(","));

//動作2
console.log("動作2");

class ArrayLike {
  constructor(items = []) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  get length() {
    return this._items.length;
  }

  set length(newLength) {
    const currentItemLength = this.items.length;
    if (newLength < currentItemLength) {
      this._items = this.items.slice(0, newLength);
    } else if (newLength > currentItemLength) {
      this._items = this.items.concat(new Array(newLength - currentItemLength));
    }
  }
}

const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
arrayLike.length = 2;
console.log(arrayLike.items.join(", "));

arrayLike.length = 5;
console.log(arrayLike.items.join(", "));