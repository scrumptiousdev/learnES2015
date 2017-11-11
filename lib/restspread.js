'use strict';

function sum(text) {
  for (var _len = arguments.length, numbers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    numbers[_key - 1] = arguments[_key];
  }

  var result = numbers.reduce(function (prev, current) {
    return prev + current;
  });
  return text + ' ' + result;
}

console.log(sum('Total is', 1, 2, 3, 4, 5, 6));

var numbers = [1, 2, 3, 4];
function multiply(first, second, third, fourth) {
  return first * second * third * fourth;
}

console.log(multiply.apply(undefined, numbers));