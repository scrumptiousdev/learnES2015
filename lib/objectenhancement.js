'use strict';

// Object shorthand

function getPerson() {
  var name = 'Ryan';
  var age = 30;

  return {
    name: name,
    age: age,
    greet: function greet() {
      return 'Hello, ' + this.name;
    }
  };

  // ES5
  // return {
  //   name: name,
  //   age: age,
  //   greet: function() {
  //     return 'Hello, ' + this.name;
  //   }
  // };
}

console.log(getPerson().greet());

// Object destructuring

var person = {
  name: 'Jemma',
  age: 28,
  results: ['foo', 'bar'],
  count: 30
};

// ES5
// var results = person.results;
// var count = person.count;

var results = person.results,
    count = person.count;


console.log(results, count);

function getData(_ref) {
  var name = _ref.name,
      count = _ref.count;

  console.log(name, count);
}

getData({
  name: 'Jemma',
  age: 28,
  results: ['foo', 'bar'],
  count: 30
});