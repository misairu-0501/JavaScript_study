// 継承の判定

class Parent {}
class Child extends  Parent{}

const parent = new Parent();
const child = new Child();

console.log(parent instanceof Parent);
console.log(parent instanceof Child);
console.log(child instanceof Parent);
console.log(child instanceof Child);