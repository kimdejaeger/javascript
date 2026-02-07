function toCelsius(fahrenheti) {
  return (5 / 9) * (fahrenheti - 32);
}

let value1 = toCelsius(10);
let value2 = toCelsius;

console.log(typeof value1); //number
console.log(typeof value2); // function
