// Arrow Functionとthis

//動作1
console.log("動作1");
const fn = () => {
  return this;
}
console.log(fn() === this);
console.log(this);