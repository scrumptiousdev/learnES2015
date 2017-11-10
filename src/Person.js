class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return this.name + ' says hello.'; // Review template strings
  }
}

console.log(new Person('Ryan').greet());
