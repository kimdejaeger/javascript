const numbers = [1, 2, 3, 4];
strings = ["a", "b", "c", "d"];

const sum = numbers.reduce((acc, num) => {
  let sum = acc + num;
  console.log("acc: " + acc + " num: " + num + " sum: " + sum);
  return sum;
}, 0);

const product = numbers.reduce((acc, num) => {
  let product = acc * num;
  console.log("acc: " + acc + " num: " + num + " product: " + product);
  return product;
}, 1);

const stringConcat = strings.reduce((acc, str) => {
  let concat = acc + str;
  console.log("acc: " + acc + " str: " + str + " concat: " + concat);
  return concat;
}, "");

console.log(sum);
console.log(product);
console.log(stringConcat);
