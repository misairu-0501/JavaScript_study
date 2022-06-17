// クロージャーの用途

const createCounter = () => {
  let privateCount = 0;
  return () => {
    privateCount++;
    return `${privateCount}回目`;
  };
};
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());