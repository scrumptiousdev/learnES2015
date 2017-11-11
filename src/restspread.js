function sum(text, ...numbers) {
  let result = numbers.reduce((prev, current) => prev + current);
  return `${text} ${result}`;
}

console.log(sum('Total is', 1, 2, 3, 4, 5, 6));


let numbers = [1, 2, 3, 4];
function multiply(first, second, third, fourth) {
  return first * second * third * fourth;
}

console.log(multiply(...numbers));
