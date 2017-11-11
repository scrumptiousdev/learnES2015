'use strict';

// const and let are block level declarations

function fire(bool) {
  if (bool) {
    // var foo = 'bar';
    var _foo = 'bar'; // Block level declaration
    console.log(_foo);
  } else {
    console.log(foo); // undefined when using var vs. ReferenceError when using let
  }
}

fire(false);

// const is not 100% immutable
var names = ['Ryan', 'Jemma'];
// names = ['Fred']; // will not work
names.push('Rebecca'); // will alter const

// best example to use const
var months = ['Jan', 'Feb', 'Mar'];