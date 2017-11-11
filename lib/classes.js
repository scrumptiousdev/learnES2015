'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES5
function User(username, email) {
  this.username = username;
  this.email = email;
}

// Function is attached to prototype in order to make one instance
// Otherwise, when it's attached inside of User class, it will have multiple of same methods every time class instance is created
User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

var user = new User('Ryan Choi', 'example@foo.com');
user.changeEmail('ryan.mingyu.choi@gmail.com');

console.dir(user);

// ES6

var UserES6 = function () {
  function UserES6(username, email) {
    _classCallCheck(this, UserES6);

    this.username = username;
    this.email = email;
  }

  _createClass(UserES6, [{
    key: 'changeEmail',


    // In ES6, this method is attached to prototype
    value: function changeEmail(newEmail) {
      this.email = newEmail;
    }
  }, {
    key: 'foo',
    get: function get() {
      return 'foo';
    }
  }], [{
    key: 'register',
    value: function register() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(UserES6, [null].concat(args)))();
    }
  }]);

  return UserES6;
}();

var user2 = new UserES6('Jemma Cho', 'example@foo.com');
user2.changeEmail('jemmacho@example.com');

console.dir(user2);

var user3 = UserES6.register('Jinwoo Cho', 'jinwoo@example.com');
console.dir(user3);

console.log(user3.foo);

function log(strategy) {
  strategy.handle();
}

var ConsoleLogger = function () {
  function ConsoleLogger() {
    _classCallCheck(this, ConsoleLogger);
  }

  _createClass(ConsoleLogger, [{
    key: 'handle',
    value: function handle() {
      console.log('Using the console strategy!');
    }
  }]);

  return ConsoleLogger;
}();

log(new ConsoleLogger());