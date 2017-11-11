// ES5
function User(username, email) {
  this.username = username;
  this.email = email;
}

// Function is attached to prototype in order to make one instance
// Otherwise, when it's attached inside of User class, it will have multiple of same methods every time class instance is created
User.prototype.changeEmail = function(newEmail) {
  this.email = newEmail;
};

var user = new User('Ryan Choi', 'example@foo.com');
user.changeEmail('ryan.mingyu.choi@gmail.com');

console.dir(user);


// ES6
class UserES6 {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(...args) {
    return new UserES6(...args);
  }

  get foo() {
    return 'foo';
  }

  // In ES6, this method is attached to prototype
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user2 = new UserES6('Jemma Cho', 'example@foo.com');
user2.changeEmail('jemmacho@example.com');

console.dir(user2);

let user3 = UserES6.register('Jinwoo Cho', 'jinwoo@example.com');
console.dir(user3);

console.log(user3.foo);


function log(strategy) {
  strategy.handle();
}

class ConsoleLogger {
  handle() {
    console.log('Using the console strategy!');
  }
}

log(new ConsoleLogger);
