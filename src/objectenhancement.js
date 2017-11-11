// Object shorthand

function getPerson() {
  let name = 'Ryan';
  let age = 30;

  return {
    name,
    age,
    greet() {
      return `Hello, ${this.name}`;
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

let person = {
  name: 'Jemma',
  age: 28,
  results: ['foo', 'bar'],
  count: 30
};

// ES5
// var results = person.results;
// var count = person.count;

let { results, count } = person;

console.log(results, count);



function getData({ name, count }) {
  console.log(name, count);
}

getData({
  name: 'Jemma',
  age: 28,
  results: ['foo', 'bar'],
  count: 30
});
